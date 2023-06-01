const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../firebaseconfig");
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

// const db = getFirestore();
//const Users = db.collection("users");
const fun=async()=>
{const  user =  await Users.add({
        name: 'name',
        email: "email",
        password: "encrypt",
      });}
fun()
console.log("this is the id ");