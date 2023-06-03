import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
  
} from "firebase/auth";
import { auth } from '../firebaseconfig';

const Register = (props) => {
  let nav=useNavigate()
  const [registered, setregistered] = useState(false);
  const provider = new GoogleAuthProvider();
  const HandleGoogle = async () => {
    var result=await signInWithPopup(auth, provider)
           props.setloader(true)
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
          props.setloader(false)
          if (response.status===200){
              console.log(json)
              localStorage.setItem("email",result.user.email)
              nav('/college_registration')
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