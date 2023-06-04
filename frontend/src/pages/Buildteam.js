import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Buildteam = (props) => {
  const nav = useNavigate();
  const params = useParams();
  let team_id=localStorage.getItem('token')
  if (sessionStorage.getItem('edit')){
    team_id = sessionStorage.getItem('edit')

  }

   
  useEffect(() => {
    
    if (sessionStorage.getItem("edit")) {
      team_id = sessionStorage.getItem('edit')
      loadinghandler(sessionStorage.getItem("edit"));
       
    }
    if (!team_id && !sessionStorage.getItem("edit")) {
      nav("/college_registration");
    }
  }, []);
  const loadinghandler=async(team_id)=>{
       let json=await fetchteamdetails(team_id)
      
       setdetails(json)
      }
  const [teamdetails, setteamdetails] = useState([]);
  
  const [users, setUsers] = useState([{ name: "", phone: "" }]);
  const [warning, setwarning] = useState("");
  const [formValues, setFormValues] = useState({
    Tm1: "",
    Tm1ph: "",
    Tm2: "",
    Tm2ph: "",
    Qm1: "",
    Qm1ph: "",
    Qm2: "",
    Qm2ph: "",
    Am1: "",
    Am1ph: "",
    Am2: "",
    Am2ph: "",
    Vm1: "",
    Vm1ph: "",
    Vm2: "",
    Vm2ph: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const fetchteamdetails = async (team_id) => {
    props.setloader(true);
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
    props.setloader(false)
    if (response.status === 200) {
      setteamdetails(json["registered_users"][0])
      return json
    } else {
      setwarning(json["error"]);
    }
  };
  const setdetails=async(json)=>{

   let teamdetails=json["registered_users"][0]
      
    
      //setting all values to fields
      if (teamdetails.length !== 0) {
        
        setFormValues({
          Tm1: teamdetails[1][0],
          Tm1ph: teamdetails[1][1],
          Tm2: teamdetails[1][2],
          Tm2ph: teamdetails[1][3],

          Am1: teamdetails[2][0],
          Am1ph: teamdetails[2][1],
          Am2: teamdetails[2][2],
          Am2ph: teamdetails[2][3],

          Vm1: teamdetails[3][0],
          Vm1ph: teamdetails[3][1],
          Vm2: teamdetails[3][2],
          Vm2ph: teamdetails[3][3],

          Qm1: teamdetails[4][0],
          Qm1ph: teamdetails[4][1],
          Qm2: teamdetails[4][2],
          Qm2ph: teamdetails[4][3],
        });
        
      
         props.setloader(false);
      }
  }
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedUsers = [...users];
    updatedUsers[index][name] = value;
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, { name: "", phone: "" }]);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sessionStorage.getItem('edit')){
      const response=await fetch("http://localhost:5000/api/admin/delete_team",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          team_id: team_id
        }),
      })
      let json=await response.json()
      if (response.status!==200){
          setwarning(json['error'])
      }
    }
    props.setloader(true);
    let treasurehunt = [];
    let quiz = [];
    let advertisement = [];
    let photo = [];
    treasurehunt.push(formValues.Tm1);
    treasurehunt.push(formValues.Tm1ph);
    treasurehunt.push(formValues.Tm2);
    treasurehunt.push(formValues.Tm2ph);

    quiz.push(formValues.Qm1);
    quiz.push(formValues.Qm1ph);
    quiz.push(formValues.Qm2);
    quiz.push(formValues.Qm2ph);

    advertisement.push(formValues.Am1);
    advertisement.push(formValues.Am1ph);
    advertisement.push(formValues.Am2);
    advertisement.push(formValues.Am2ph);

    photo.push(formValues.Vm1);
    photo.push(formValues.Vm1ph);
    photo.push(formValues.Vm2);
    photo.push(formValues.Vm2ph);

    // Do something with the user data, e.g., send it to the server
    let cultural = [];
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      cultural.push(element["name"]);
      cultural.push(element["phone"]);
    }
    console.log(cultural);
    const response = await fetch(
      "http://localhost:5000/api/team/team_members",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
          treasurehunt: treasurehunt,
          advertising: advertisement,
          quiz: quiz,
          photography: photo,
          cultural: cultural,
          team_id: team_id,
        }),
      }
    );
    const json = await response.json();
    if (response.status === 200) {
      props.setloader(false);
      nav("/");
    } else {
      props.setloader(false);
      setwarning(json["msg"]);
    }
  };

  return (
    <div className=" container  w-50">
      <h2>Team Information</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="my-3">Treasure hunt</h3>
        <div className="my-2 form-group">
          <label for="username">Member 1</label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            required
            value={formValues.Tm1}
            name="Tm1"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            onChange={handleInput}
            required
            name="Tm1ph"
            value={formValues.Tm1ph}
            placeholder="Enter your phone  number"
          />
        </div>
        <div className="form-group">
          <label for="username">Member 2</label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            value={formValues.Tm2}
            name="Tm2"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            onChange={handleInput}
            name="Tm2ph"
            value={formValues.Tm2ph}
            placeholder="Enter your phone  number"
          />
        </div>
        <h3 className="my-3">Quiz</h3>
        <div className="my-2 form-group">
          <label for="username">Member 1</label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            value={formValues.Qm1}
            name="Qm1"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            value={formValues.Qm1ph}
            onChange={handleInput}
            name="Qm1ph"
            placeholder="Enter your phone  number"
          />
        </div>
        <div className="form-group">
          <label for="username">Member 2</label>
          <input
            type="text"
            className="form-control"
            name="Qm2"
            value={formValues.Qm2}
            onChange={handleInput}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            name="Qm2ph"
            value={formValues.Qm2ph}
            onChange={handleInput}
            placeholder="Enter your phone  number"
          />
        </div>
        <h3 className="my-3">Advertisement</h3>
        <div className="form-group">
          <label for="username">Member 1</label>
          <input
            value={formValues.Am1}
            type="text"
            className="form-control"
            name="Am1"
            onChange={handleInput}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            value={formValues.Am1ph}
            className="form-control"
            name="Am1ph"
            onChange={handleInput}
            placeholder="Enter your phone  number"
          />
        </div>
        <div className="form-group">
          <label for="username">Member 2</label>
          <input
            type="text"
            className="form-control"
            value={formValues.Am2}
            name="Am2"
            onChange={handleInput}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            name="Am2ph"
            value={formValues.Am2ph}
            onChange={handleInput}
            placeholder="Enter your phone  number"
          />
        </div>
        <h3 className="my-3">Video editing and Photography</h3>
        <div className="form-group">
          <label for="username">Member 1</label>
          <input
            type="text"
            className="form-control"
            name="Vm1"
            onChange={handleInput}
            value={formValues.Vm1}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            className="form-control"
            name="Vm1ph"
            onChange={handleInput}
            value={formValues.Vm1ph}
            placeholder="Enter your phone  number"
          />
        </div>
        <div className="form-group">
          <label for="username">Member 2</label>
          <input
            value={formValues.Vm2}
            type="text"
            className="form-control"
            name="Vm2"
            onChange={handleInput}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label for="password">Phone number </label>
          <input
            type="number"
            value={formValues.Vm2ph}
            className="form-control"
            name="Vm2ph"
            onChange={handleInput}
            placeholder="Enter your phone  number"
          />
        </div>
        <h3 className="my-3">Cultural Event</h3>
        {users.map((user, index) => (
          <div key={index}>
            <div className="form-group">
              <label htmlFor={`name${index}`}>Name</label>
              <input
                type="text"
                className="form-control"
                id={`name${index}`}
                name="name"
                value={user.name}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`phone${index}`}>Phone Number</label>
              <input
                type="number"
                className="form-control"
                id={`phone${index}`}
                name="phone"
                value={user.phone}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Enter phone number"
                required
              />
            </div>
            {index > 0 && (
              <button
                type="button"
                className="my-2 float-end btn btn-danger"
                onClick={() => handleDeleteUser(index)}
              >
                Delete member
              </button>
            )}
          </div>
        ))}
        <div className="form-group">
          <button
            type="button"
            className="my-2 btn btn-success"
            onClick={handleAddUser}
          >
            Add member
          </button>
        </div>
        <small>
          Make sure all the details are correct..you cant change your team after
          you submit this form... for any assistance contact organizers or
          volunteers
        </small>{" "}
        <br />
        <small style={{ color: "red" }}>{warning}</small> <br />
        <button type="submit" className="my-2 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Buildteam;
