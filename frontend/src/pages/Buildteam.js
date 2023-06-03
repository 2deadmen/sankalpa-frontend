import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Buildteam = () => {
  const nav=useNavigate()
  const team_id=localStorage.getItem('token')
  useEffect(() => {
  
     if (!team_id){
        nav('/college_registration')
     }
  }, [])
  

  const [users, setUsers] = useState([{ name: '', phone: '' }]);
  const [warning, setwarning] = useState("")

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedUsers = [...users];
    updatedUsers[index][name] = value;
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, { name: '', phone: '' }]);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    let treasurehunt=[]
    let quiz=[]
    let advertisement=[]
    let photo=[]
    treasurehunt.push(document.getElementById('Tm1').value)
    treasurehunt.push(document.getElementById('Tm1ph').value)
    treasurehunt.push(document.getElementById('Tm2').value)
    treasurehunt.push(document.getElementById('Tm2ph').value)
   
    quiz.push(document.getElementById('Qm1').value)
    quiz.push(document.getElementById('Qm1ph').value)
    quiz.push(document.getElementById('Qm2').value)
    quiz.push(document.getElementById('Qm2ph').value)

    advertisement.push(document.getElementById('Am1').value)
    advertisement.push(document.getElementById('Am1ph').value)
    advertisement.push(document.getElementById('Am2').value)
    advertisement.push(document.getElementById('Am2ph').value)

    photo.push(document.getElementById('Vm1').value)
    photo.push(document.getElementById('Vm1ph').value)
    photo.push(document.getElementById('Vm2').value)
    photo.push(document.getElementById('Vm2ph').value)

    // Do something with the user data, e.g., send it to the server
    let cultural=[]
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      cultural.push(element['name'])
      cultural.push(element['phone'])
      
    }
    console.log(cultural)
    const response=await fetch('http://localhost:5000/api/team/team_members',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        treasurehunt:treasurehunt,
        advertising: advertisement,
        quiz: quiz,
        photography:photo,
        cultural:cultural,
        team_id:team_id
       
      }),
    })
    const json=await response.json()
    if (response.status===200){
      nav('/')

    } 
    else{
   setwarning(json['msg'])
    }  
    

  };

  return (
    <div className=' container  w-50'>
      <h2>Team Information</h2>
      <form onSubmit={handleSubmit}>
      <h3>Treasure hunt</h3>
      <div className="form-group">
            <label for="username">Member 1</label>
            <input type="text" className="form-control" required id="Tm1" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" required id="Tm1ph" placeholder="Enter your phone  number"/>
          </div>
          <div className="form-group">
            <label for="username">Member 2</label>
            <input type="text" className="form-control"  id="Tm2" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Tm2ph" placeholder="Enter your phone  number"/>
          </div>
          
          <h3>Quiz</h3>
          <div className="form-group">
            <label for="username">Member 1</label>
            <input type="text" className="form-control"  id="Qm1" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Qm1ph" placeholder="Enter your phone  number"/>
          </div>
          <div className="form-group">
            <label for="username">Member 2</label>
            <input type="text" className="form-control" id="Qm2" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Qm2ph" placeholder="Enter your phone  number"/>
          </div>
          <h3>Advertisement</h3>
          <div className="form-group">
            <label for="username">Member 1</label>
            <input type="text" className="form-control" id="Am1" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Am1ph" placeholder="Enter your phone  number"/>
          </div>
          <div className="form-group">
            <label for="username">Member 2</label>
            <input type="text" className="form-control" id="Am2" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Am2ph" placeholder="Enter your phone  number"/>
          </div>


          <h3>Video editing and Photography</h3>
      <div className="form-group">
            <label for="username">Member 1</label>
            <input type="text" className="form-control" id="Vm1" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Vm1ph" placeholder="Enter your phone  number"/>
          </div>
          <div className="form-group">
            <label for="username">Member 2</label>
            <input type="text" className="form-control" id="Vm2" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="password">Phone number </label>
            <input type="number" className="form-control" id="Vm2ph" placeholder="Enter your phone  number"/>
          </div>
          

        <h3>Cultural Event</h3>

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
              <button type="button" onClick={() => handleDeleteUser(index)}>
                Delete User
              </button>
            )}
          </div>
        ))}
        <div className="form-group">
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        </div>
        <small style={{"color":"red"}}>{warning}</small>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Buildteam