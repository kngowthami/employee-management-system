import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"; 
import  {Link} from "react-router-dom"; 


function EmpDetails(){
    const [data,setData]=useState(null)
    const {empid}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3006/Employe/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
            setData(resp)
        })
    },[]) 
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h3>Employee Details</h3>
                </div>
                <div className="card-body">
                    {data && 
                    <div>
                    <p>Employe Name is: {data.name} ({data.id}) </p>
                    <p>Employe Email:  {data.email}</p>
                    <p>Employe Mobile:{data.mobile}</p>
                    <p>Employe Salary:{data.salary}</p>
                    </div>
                    
                    }
                    <Link to="/" className="btn btn-danger">Back</Link>
                </div>
            </div>
        </div>
    )
}
export default EmpDetails;