import React,{useState} from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseconfig';
import { useNavigate } from 'react-router-dom';
const Regclg = () => {
    let nav=useNavigate()
    const [image, setimage] = useState(null);
    const [warning, setwarning] = useState("")
    const [imageurl, setimageurl] = useState(null)
    const handleFile = (e) => {
        if (e.target.files && e.target.files.length === 1) {
          setimage(e.target.files[0]);
        }}


  const createUpload=async()=>{
  

    const storageRef = ref(storage, `${image.name}`);

     uploadBytes(storageRef, image).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setimageurl(url)
        
        return url
    });
});
  }
  const handlesubmit=async(e)=>{
    let staff=document.getElementById('staff').value
    let college=document.getElementById('name').value
    let utr=document.getElementById('utr').value
    let staff_number=document.getElementById('staff_number').value
    

    if (staff==="" || college==="" || utr==="" || staff===""){
        setwarning("please fill out all the fields")
        return
    }
    e.preventDefault()
    if (!image){
        setwarning("image not uploaded..please try again")
        return 
    }
    let url=await createUpload()
    if (!imageurl && !url){
        setwarning("image not uploaded...please try again")
        return
    }
   
    try {
        const response=await fetch('http://localhost:5000/api/team/createteam',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          staff:staff,
          staff_number:staff_number,
          college:college,
          utr:utr,
          screenshot:imageurl,
          
         
        }),
      })
      let json=await response.json()
      if (response.status===200){
   
        localStorage.setItem('token',json['team_id'])
        nav('/build_team')
      }


    } catch (error) {
        setwarning(error)
    }
    
       
  }
  return (
    <div>
        <div className='container '>
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 align="center"> Registration</h2>
        <form>
          <div className="form-group py-2 my-2">
            <label for="username" className='my-2'>College Name</label>
            <input type="text" required className="form-control" name="name" id="name" placeholder="Enter your college name"/>
          </div>
          <div className="form-group py-2 my-2">
            <label for="username" className='my-2'>Staff Incharge</label>
            <input type="text" required className="form-control" id="staff" placeholder="Enter your incharge name"/>
          </div>
          <div className="form-group py-2 my-2">
            <label for="username" className='my-2'>Staff Incharge Phone number</label>
            <input type="number" required className="form-control" id="staff_number" placeholder="Enter your mobile number"/>
          </div>
          <small>Please provide information of the staff who will be accompanying  the students.  </small>

         <div align="center" > <img src="" alt="" width={200} height={200}/><br />
          <a href="upi://pay?pa=kartikhegde.2002@okaxis&pn=Recipient%20Name&am=100&cu=INR"><button type='button' className='btn  my-1 btn-primary'>pay </button></a>
         </div> <br />
         <div className="form-group py-2 my-2">
            <label for="username" className='my-2'>UTR number</label>
            <input type="text" required className="form-control" id="utr" placeholder="Enter UTR number"/>
          </div>
          <small>It is the UPI transaction ID in G pay</small>
          <div class="mb-3">
  <label for="formFile" class="form-label">Screenshot of the payment</label>
  <input class="form-control" required type="file" onChange={handleFile} id="formFile"/>
</div>
<small>Make sure you get the full screenshot using share option in your UPI application </small>
<small color='red'>{warning} <br /></small> 
          <button  type="submit" onClick={handlesubmit} className=" py-2 my-3  btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Regclg