const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();


const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

const db = getFirestore();



router.post(
    "/totalvisitors",
    
    async (req, res) => {
     
  
      try {
       
        const snapshot = await db
          .collection("users")
          .get();
        
        if (!snapshot) {
          return res.status(400).json({ error: "Please try to login again " });
        }
       

        res.json({size: snapshot._size });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
  );
  router.post(
    "/registered_teams",
    
    async (req, res) => {
     
  
      try {
       
        const snapshot = await db
          .collection("teamsreg")
          .get();
        
        if (!snapshot) {
          return res.status(400).json({ error: "Please try to login again " });
        }
        var c=0
        var result=[]
        snapshot.forEach((doc) => {
            var arr = []
            arr.push(doc.id)
            arr.push(doc.data().college_name);
            arr.push(doc.data().UTR);
            arr.push(doc.data().ss_link);
            arr.push(doc.data().staff_name);
            arr.push(doc.data().staff_phonenumber);
            arr.push(doc.data().teamname)
            result.push(arr)
            c++

           });
       
        
        res.json({"registered_users":
    result,"total":c });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
  );

  
  router.post(
    "/team_details",
    
    async (req, res) => {
     
  
      try {
        const { team_id} = req.body;
        const snapshot = await db
          .collection("team_members")
          .where("team_id", "==", team_id)
        .get();
        console.log(snapshot._docs())
        if (!snapshot) {
          return res.status(400).json({ error: "Team id is invalid..please try again " });
        }
       
        
        var result=[]
        snapshot.forEach(doc => {
            var arr=[]
            console.log( doc.data().treasurehunt);
            arr.push(doc.data().team_id)
            arr.push(doc.data().treasurehunt)
            arr.push(doc.data().advertising)
            arr.push(doc.data().photography)
            arr.push(doc.data().quiz)
            arr.push(doc.data().cultural)
            
            result.push(arr)
          });
       
       
        
        res.json({"registered_users":
    result,"total":snapshot._size});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
  );

  router.post(
    "/all_team_details",
    
    async (req, res) => {
     
  
      try {
       
        const snapshot = await db
          .collection("team_members")
        .get();
        console.log(snapshot._docs())
        if (!snapshot) {
          return res.status(400).json({ error: "Team id is invalid..please try again " });
        }
       
        
        var result=[]
        snapshot.forEach(doc => {
            var arr=[]
           
            arr.push(doc.data().team_id)
            arr.push(doc.data().treasurehunt)
            arr.push(doc.data().advertising)
            arr.push(doc.data().cultural)
            arr.push(doc.data().photography)
            arr.push(doc.data().quiz
            )
            
            result.push(arr)
          });
       
       
        
        res.json({"registered_users":
    result,"total":snapshot._size});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
  );


  router.post(
    "/delete_team",
    
    async (req, res) => {
     
  
      try {
        const { team_id} = req.body;
        const snapshot = await db
          .collection("team_members")
          .where("team_id", "==", team_id)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete().then(() => {
              res.json({msg:'Document successfully deleted.'});
            }).catch((error) => {
              res.status(500).send({ error: error.message });
            });
          });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
        
        
       
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }
  );
  


  module.exports = router;