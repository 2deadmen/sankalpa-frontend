import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin:'20px 20px',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'auto', // Make the content scrollable
  maxHeight: '80vh',
  p: 4,
};

const Admin = () => {
  const nav=useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = async(team_id) => {
    await fetchteamdetails(team_id)
    await  setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [totalvisitors, settotalvisitors] = useState(0);
  const [allteams, setallteams] = useState([]);
  const [cultural, setcultural] = useState([])
  const [teamdetails, setteamdetails] = useState([]);
  const [allteamdetails, setallteamdetails] = useState([]);
  const [warning, setwarning] = useState("");
  const [searchres, setsearchres] = useState([]);
  useEffect(() => {
    fetchallteams();
  }, []);

  const fetchallteams = async () => {
    const response = await fetch(
      "http://localhost:5000/api/admin/registered_teams",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.status === 200) {
      setallteams(json["registered_users"]);
    }
  };

  const fetchteamdetails = async (team_id) => {
    const response = await fetch(
      "http://localhost:5000/api/admin/team_details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_id: team_id,
        }),
      }
    );
    const json = await response.json();
    if (response.status === 200) {
      setteamdetails(json["registered_users"][0]);
      let arr=[]
      let len=json["registered_users"][0][5]
      for (let index = 0; index < len.length; ) {
        const element = len;
              
              let node={name:element[index],number:element[index + 1]}
              index+=2
              arr.push(node)       
      }
      setcultural(arr)
      
    } else {
      setwarning(json["error"]);
    }
  };

  const fetchallteamdetails = async () => {
    const response = await fetch(
      "http://localhost:5000/api/admin/all_team_details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.status === 200) {
      setteamdetails(json["registered_users"]);
    } else {
      setwarning(json["error"]);
    }
  };
  const handlesearch = () => {
    
    let keys = document.getElementById("searchbar").value.toLowerCase();
    if (keys === "") {
      setsearchres([]);
      return
    }
    for (let i = 0; i < allteams.length; i++) {
        let ele=allteams[i][1].toLowerCase()
        if (ele.includes(keys.toLowerCase())) {
         if(!searchres.includes(allteams[i])){
          setsearchres([...searchres, allteams[i]]);
         }
      }
    }
    
  };
  
  const handleedit=async(team_id)=>{
    sessionStorage.setItem('edit',team_id)
    nav(`/build_team`)
  }
 
  return (
    <div className="container">
      {" "}
      <div>
     {teamdetails.length !== 0 && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      { teamdetails.length !== 0 &&
       <Box sx={style}>
       <h2>Team ID -- {teamdetails[0]}</h2>
         <h3>Treasurehunt</h3>
         <p>1 : {teamdetails[1][0]}  --  <a href={"tel:"+teamdetails[1][1] }>{teamdetails[1][1]}</a></p>
         <p>2 : {teamdetails[1][2]}  --  <a href={"tel:"+teamdetails[1][3] }>{teamdetails[1][3]}</a></p>

         <h3>advertising</h3>
         <p>1 : {teamdetails[2][0]}  --  <a href={"tel:"+teamdetails[2][1] }>{teamdetails[2][1]}</a></p>
         <p>2 : {teamdetails[2][2]}  --  <a href={"tel:"+teamdetails[2][3] }>{teamdetails[2][3]}</a></p>

         <h3>photography</h3>
         <p>1 : {teamdetails[3][0]}  --  <a href={"tel:"+teamdetails[3][1] }>{teamdetails[3][1]}</a></p>
         <p>2 : {teamdetails[3][2]}  --  <a href={"tel:"+teamdetails[3][3] }>{teamdetails[3][3]}</a></p>


         <h3>quiz</h3>
         <p>1 : {teamdetails[4][0]}  --  <a href={"tel:"+teamdetails[4][1] }>{teamdetails[4][1]}</a></p>
         <p>2 : {teamdetails[4][2]}  --  <a href={"tel:"+teamdetails[4][3] }>{teamdetails[4][3]}</a></p>

         <h3>cultural</h3>
         {
          cultural.map((ele)=>{
            return  <p key={ele}> {ele['name']} --- <a href={"tel:"+ ele['number']}>{ele['number']}</a> </p>
          })
         }
        </Box>}
      </Modal>}
        <h1>Admin Panel</h1>
      </div>

   

      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          id="searchbar"
          onKeyUp={handlesearch}
          placeholder="Search teams by college name"
          aria-label="Search"
        />
      </form>
      <table cellPadding={5} cellSpacing={5} border={2}>
        {searchres !== [] &&
          searchres.map((ele) => {
            return (
              <tr>
                <td><button className="btn btn-primary" onClick={()=>handleOpen(ele[0])}>view details</button></td>
                <td>{ele[6]}</td>
                <td> {ele[1]}</td>
                <td> {ele[2]}</td>
                <td>
                  {" "}
                  <a href={ele[3]}>{ele[3]}</a>
                </td>
                <td> {ele[4]}</td>
                <td>
                  {" "}
                  <a href={"tel:" + ele[5]}>{ele[5]}</a>
                </td>
                <td><button className="btn btn-primary" onClick={()=>handleedit(ele[0])}><i class="fa-solid fa-pen"></i> </button></td>
              </tr>
            );
          })}{" "}
      </table>
      <h2 align="center">Registered teams</h2>
      total teams : {allteams.length}
      <table cellPadding={5} cellSpacing={5} border={2}>
        <tr>

          <th>team id</th>
          <th>Team name</th>
          <th>college name</th>
          <th>UTR</th>
          <th>Screenshot</th>
          <th>staff</th>
          <th>Staff number </th>
          <hr />
        </tr>
        {allteams !== [] &&
          allteams.map((ele) => {
            return (
              <tr>
                
                <td><button className="btn btn-primary" onClick={()=>handleOpen(ele[0])}>view details</button></td>
                <td>{ele[6]}</td>
                <td> {ele[1]}</td>
                <td> {ele[2]}</td>
                <td>
                  {" "}
                  <a href={ele[3]}>{ele[3]}</a>
                </td>
                <td> {ele[4]}</td>
                <td>
                  {" "}
                  <a href={"tel:" + ele[5]}>{ele[5]}</a>
                </td>
                <td><button className="btn btn-primary" onClick={()=>handleedit(ele[0])}><i class="fa-solid fa-pen"></i> </button></td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Admin;
