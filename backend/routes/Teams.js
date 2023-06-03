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
const Teamsreg=db.collection("teamsreg")
const Team_members=db.collection("team_members")



router.post(
    "/createteam",
   
    async (req, res) => {
     
      try {
        const { staff ,staff_number, college , utr , screenshot,teamname } = req.body;
        const snapshot = await db
                .collection("teamsreg")
                .where("teamname", "==", teamname)
                .get();
                if (snapshot._size > 0) {
                  console.log()
                          return res.status(400).json({ error: "Please verify with your college...this team already exists " });
                        }
                        
        const team = await Teamsreg.add({
          teamname:teamname,
          staff_name:staff,
         staff_phonenumber:staff_number,
         college_name:college,
         UTR:utr,
         ss_link:screenshot
        });
        team_id=team.id
       
        res.json({team_id });
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
    }
  );

  router.post(
    "/team_members",
   
    async (req, res) => {
     
      try {
        const { treasurehunt ,advertising ,quiz ,photography,cultural ,team_id} = req.body;
        
        var team = await Team_members.add({
          treasurehunt:treasurehunt,
          advertising:advertising,
          quiz:quiz,
          photography:photography,
          cultural:cultural,
          team_id:team_id
        });
        console.log(team.id)
        
        
        res.json({msg:"reg successful"});
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
    }
  );
   module.exports=router