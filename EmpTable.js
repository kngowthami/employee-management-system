
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function EmpTable() {
    const [data, setData] = useState(null)
    const [value,setValue]=useState("")
    const [sort,setSort]=useState("")
    const navigate = useNavigate()

const options=["name","email","mobile","salary"]

    useEffect(() => {
        loadData(0,1)
    }, [])

    const loadData = (start, end, increase) => {
        fetch(`http://localhost:3006/Employe?_start=${start}&_end=${end}`)
        // fetch("http://localhost:3006/Employe")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }

   


    const onDelete = (id) => {
        if (window.confirm("Do you want delete?")) {
            fetch("http://localhost:3006/Employe/" + id, {
                method: "DELETE"
            })
                .then(() => {
                    alert("Deleted successfully..!!")
                    window.location.reload()
                })
        }
    }

    const onEdit = (id) => {
        navigate("/empedit/" + id)
    }
    const onDetails = (id) => {
        navigate("/empdetails/" + id)
    }
// npm i axios 
    // fiter records
    const SearchData=(e)=>{
        console.log(e.target.value)
       setValue(e.target.value)
    }
    const handleSubmit=async (e)=>{
  e.preventDefault()
        return await axios.get(`http://localhost:3006/Employe?q=${value}`)
        .then((res)=>{
            setData(res.data)
           setValue("")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const reset=(e)=>{
        e.preventDefault()
        fetch("http://localhost:3006/Employe")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                
                setData(resp)
            })
    }

    const sortData=async (e)=>{
        e.preventDefault()
        let value=e.target.value
        setSort(value)
        return await axios.get(`http://localhost:3006/Employe?_sort=${value}&_order=desc`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

   


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Search</label>
                    <input type="text" value={value}  onChange={SearchData} className="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">Search</button>
                <button onClick={reset}  class="btn btn-primary">Reset</button>
            </form>
            <select value={sort} onChange={sortData}>
                <option>Choose options</option>
                {options.map((item)=>(
                    <option>{item}</option>
                ))}
            </select>
            <div className="card">
                <div className="card-title">
                    <h3>Employe Management System</h3>

                </div>
                <div className="card-body">

                    <Link to="/form" className="btn btn-success">
                        Add New (+)
                    </Link>


<table className="table table-bordred">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <a onClick={() => { onDelete(item.id) }} className="btn btn-danger">Delete</a>
                                        <a onClick={() => { onEdit(item.id) }} className="btn btn-success">Edit</a>
                                        <a onClick={() => { onDetails(item.id) }} className="btn btn-primary">Details</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmpTable;