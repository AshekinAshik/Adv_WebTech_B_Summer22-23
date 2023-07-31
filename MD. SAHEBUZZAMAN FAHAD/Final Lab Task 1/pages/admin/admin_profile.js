import Link from "next/link";


export default function AdminProfile() {
    return (
      <div>
        <h1>This is Admin profile</h1>

        <Link href="update_admin_data">Update Admin Data</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      </div>
    )
  }