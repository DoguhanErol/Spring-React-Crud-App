import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    let navigate = useNavigate()
    const {id} = useParams();

    const[user, setUser] = useState({
      name:"",
      userName:"",
      email:""
    })

    useEffect(() => {
    loadUser();
    }, [])
    
  
    const {name,userName, email} = user
    const onInputChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`, user)
      navigate('/')
    }

    const loadUser = async () => {
        const result =await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
      <>
        <section className='FormCard'>
        <form onSubmit={(e)=>onSubmit(e)} className='w-50'>
        <h1>Edit User</h1>
  
        <div class="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input  className="form-control"  placeholder='Enter Your Name' name='name' value={name} onChange={(e) => onInputChange(e)} />
        </div>
        <div class="mb-3">
          <label htmlFor="Username" className="form-label">Username</label>
          <input  className="form-control"  placeholder='Enter Your Username' name='userName' value={userName} onChange={(e) => onInputChange(e)} />
        </div>
        <div class="mb-3">
          <label htmlFor="Email" className="form-label">Email</label>
          <input  className="form-control"  placeholder='Enter Your Email' name='email' value={email} onChange={(e) => onInputChange(e)} />
        </div>
        <button type="submit" className="btn btn-outline-primary mx-2">Submit</button>
        <Link to={'/'} type="submit" className="btn btn-outline-danger mx-2">Cancel</Link>
  
      </form>
        </section>
      </>
    )
}

export default EditUser