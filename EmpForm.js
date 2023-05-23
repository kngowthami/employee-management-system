
import { useState } from "react"  //Es6
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

function EmpForm(){
  const [id,setId]=useState("")  
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [salary,setSalary]=useState("")
 const navigate=useNavigate()

const update=(e)=>{
    console.log(e.target.value)
       setId(e.target.value)
  }
  
const update1=(e)=>{
  console.log(e.target.value)
     setName(e.target.value)
}

const update2=(e)=>{
  setEmail(e.target.value)
}
const update3=(e)=>{
  setMobile(e.target.value)
}
const update4=(e)=>{
  setSalary(e.target.value)
}

const handleSubmit=(e)=>{
  e.preventDefault()
    const data={id,name,email,mobile,salary}
    fetch("http://localhost:3006/Employe",{
     method:"POST",
     headers:{"content-type":"application/json"},
     body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Saved Successfully...!!")
        navigate("/")
    })
    .catch(()=>{
        alert("error..!!")
    })
}  

  return(
    <div>
     
<h3>Registration</h3>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label className="form-label">ID:</label>
    <input type="text" value={id} disabled="disabled" required  className="form-control" onChange={update} />
  </div>
<div className="mb-3">
    <label className="form-label">FullName:</label>
    <input type="text" value={name} required className="form-control" onChange={update1} />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" value={email} required className="form-control" onChange={update2} />
  </div>
  <div className="mb-3">
    <label className="form-label">Mobile:</label>
    <input type="text" value={mobile} required className="form-control" onChange={update3} />
  </div>
  <div className="mb-3">
    <label className="form-label">Salary:</label>
    <input type="text" value={salary} required className="form-control" onChange={update4} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
  <Link className="btn btn-danger" to="/">Back</Link>
  
</form>



    </div>
  )
}

export default EmpForm;