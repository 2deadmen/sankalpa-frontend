const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const Users = require("../firebaseconfig");
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

const db = getFirestore();
//const Users = db.collection("users");
router.post(
  "/createuser",
 
  async (req, res) => {
   
    try {
      const { email, password, name } = req.body;
      const data = email;
      const salt = 10;
    
      

      const encrypt = await bcrypt.hash(password,salt);

      const user = await Users.add({
        name: name,
        email: email,
        password: encrypt,
      });
      user_id=user.id
     
      res.json({user_id });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
);

router.post(
  "/login",
  
  async (req, res) => {
   

    try {
      const { email, password } = req.body;
      // const check = db.collection('users').doc(email);
      // const doc = await check.get();
      // const compass=doc.data().password
      const snapshot = await db
        .collection("users")
        .where("email", "==", email)
        .get(1);
      var new_pass;
      var new_id;
      if (!snapshot) {
        return res.status(400).json({ error: "Please try to login again " });
      }
      snapshot.forEach((doc) => {
       (doc.data().password);
        new_pass = doc.data().password;
        new_id = doc.id;
      });

      const compare = await bcrypt.compare(password, new_pass);
      if (!compare) {
        return res.status(400).json({ error: "Please try to login again" });
      }
     
      


      res.json({ new_id });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);
module.exports = router;