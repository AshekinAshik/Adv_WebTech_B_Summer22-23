import Link from "next/link";
import Layout from "../home_header_fotter_content/layout";


export default function ManagerAllData() {
    return (
      <div>
        <Layout>
        <h1>This is Admin Log in Page</h1>
        <div>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" />
            </label><br></br><br></br>

            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" />
            </label><br></br><br></br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Log In</button>
        </div>
        <p>If you not create account <Link href="admin_reg">Registration</Link></p>
        <Link href="/home">Home</Link>
        </Layout>
      </div>
    )
  }