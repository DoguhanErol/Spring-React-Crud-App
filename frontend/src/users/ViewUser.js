import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewUser() {
    const[user, setUser] = useState({
        name:"",
        userName:"",
        email:""
      })
      
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    }, [])
    
    const loadUser = async () => {
        const result =await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <>
    <div className='container'>
    <h1>User Details</h1>
        <div className='card'>
            <div className='card-header'>
                Details of user id: {id}
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Name:</b>{user.name}
                    </li>
                    <li className='list-group-item'>
                        <b>
                            Username:</b>{user.userName}
                    </li>
                    <li className='list-group-item'>
                        <b>Email:</b>{user.email}
                    </li>
                </ul>
                <Link to={'/'} className='btn btn-primary my-2'> Back to Home</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default ViewUser