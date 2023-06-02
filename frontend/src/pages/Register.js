import React,{useState} from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
  
} from "firebase/auth";
import { auth } from '../firebaseconfig';

const Register = () => {
  const [registered, setregistered] = useState(false);
  const provider = new GoogleAuthProvider();
  const HandleGoogle = async () => {
    var result=await signInWithPopup(auth, provider)
           const response=await fetch('http://localhost:5000/api/auth/createuser',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name:result.user.displayName,
              email: result.user.email,
              password: result.user.photoURL,
             
            }),
          })  
          const json = await response.json();
          if (response.status===200){
              console.log(json)
          }else{
            console.log(json)
          }
           
           
        }
  return (
    <div>Register
      <button className='btn btn-primary' onClick={HandleGoogle}><i class="fa-brands fa-google"></i> sign up</button>
    </div>
  )
}

export default Register