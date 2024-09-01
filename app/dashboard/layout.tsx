import React, { ReactNode } from 'react'
import Link from 'next/link'

interface props{
    children: ReactNode
}


export default function layout({children}: props) {
  return (
    <>
    <div className="bg-slate-900 flex ">
      <Link href={`/dashboard`}><h1 className="text-white px-4">DASHBOARD</h1></Link>
      <Link href={`/dashboard/posts`}><h1 className="text-white px-4">PRODUCTS</h1></Link>
      <Link href={`/dashboard/users`}><h1 className="text-white px-4">USERS</h1></Link>
      
    </div>
    <main className='p-4'>
        {children}
    </main>
    </>
  )
}
