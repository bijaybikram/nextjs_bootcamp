import React from 'react'
import User from '../UserInterface'
import Link from 'next/link'
import NotFound from '@/app/not-found'

interface Params {
  params: {
    user_id: number
  }
}

export default async function UserDetail({params: {user_id}}: Params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const data: User = await res.json()
    // console.log(data)
    if(data.id > 10) {
      return NotFound;
    }

  return (
    <div>
      <h1>User Details</h1>
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{data.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/dashboard/users" className='btn btn-primary'>Back to Users List</Link>
    </div>
  )
}
