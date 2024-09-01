import React from 'react'
import Post from '../PostInterface'
import Link from 'next/link'

interface Params {
    params: {
      post_id: number
    }
  }

export default async function PostDetails({params: {post_id}}: Params) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data: Post = await res.json()
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
                <td>{data.title}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{data.body}</td>
              </tr>
            </tbody>
          </table>
          <Link href="/dashboard/posts" className='btn btn-primary'>Back to Posts List</Link>
        </div>
      )
}
