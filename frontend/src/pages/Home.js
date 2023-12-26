import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [users,setUsers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () =>{
        try {
            const result = await axios.get("http://localhost:8080/users") 
            setUsers(result.data)
        } catch (error) {
            console.log('Error')
        }
    }
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers(); 
  }
    
  return (
    <>
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope='col'>Action</th>
                </tr>
            </thead>


            <tbody>
                {users.map((user,index) => 
                    <tr>
                      <th scope="row" key={index}>{index + 1 }</th>
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>View</Link>
                        <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                        <button onClick={() => deleteUser(user.id)} className='btn btn-danger mx-2'>Delete</button>
                      </td>
                    </tr>
                )}

            </tbody>
        </table>
        </div>

    </div>
    </>
  )
}

export default Home