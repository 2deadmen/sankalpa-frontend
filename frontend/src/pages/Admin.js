import React, { useEffect, useState } from "react";


const Admin = () => {
   
  const [totalvisitors, settotalvisitors] = useState(0);
  const [allteams, setallteams] = useState([]);
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
      setteamdetails(json["registered_users"]);
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
 const handleview=async(team_id)=>{
 
    await fetchteamdetails(team_id)
  

 }
 
  return (
    <>
      {" "}
      <div>
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
                <td><button className="btn btn-primary" onClick={()=>handleview(ele[0])}>view details</button></td>
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
                
                <td><button className="btn btn-primary" onClick={handleview}>view details</button></td>
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
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default Admin;
