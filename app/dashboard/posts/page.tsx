import React from 'react'
import Post from './PostInterface'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";


export default async function ProductsPage() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data: Post[] = await res.json()

  return (
    <div>
     <Link href={`/dashboard/users/new`} className='uderline btn btn-primary'>New Post</Link>
      
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Link href={`/dashboard/posts/${post.id}`} className='btn btn-primary'> <FaEye />See more</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
