import Link from "next/link";
import Meta from "../meta";
import { NextRequest } from "next/server";

const AdminProfile = () => {




    return (
      <div>
   
        <Meta title="Profile Page" keywords="fahad" description ="Fahad" />
        <h1>This is Admin profile</h1>

        <Link href="update_admin_data">Update Admin Data</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      
      </div>
    );
  }

export default  AdminProfile