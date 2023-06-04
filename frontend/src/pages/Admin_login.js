import React from 'react'
import { useNavigate } from 'react-router-dom'
const Admin_login = () => {
    let nav=useNavigate()
    const handlelogin=()=>{
        let pass=document.getElementById('inputPassword5').value
        if(pass==="jss@12345"){
            sessionStorage.setItem('admin-token',"werty78345bgv098oxc")
            nav('/admin')
        }   else{
            nav('/')
        }
    }
  return (
    <div className='container w-50 my-10'>
        <h1 align="center">ADMIN</h1>
        <form onSubmit={handlelogin}>
        <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
  <div align="center"><button className='btn-primary btn' type='submit'>
    Login</button></div></form>
    </div>
  )
}

export default Admin_login