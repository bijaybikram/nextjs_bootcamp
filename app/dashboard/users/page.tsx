import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import User from "../users/UserInterface"
import Image from 'next/image';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();
  // console.log(data);

  return (
    <div>
      <Link href={`/dashboard/users/new`} className='uderline btn btn-primary'>New User</Link>
      
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
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <Image src={'/images/as.jpeg'} alt='' height={100} width={100}></Image>
              <td>
                <Link href={`/dashboard/users/${user.id}`} className='btn btn-primary'> <FaEye />See more</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
