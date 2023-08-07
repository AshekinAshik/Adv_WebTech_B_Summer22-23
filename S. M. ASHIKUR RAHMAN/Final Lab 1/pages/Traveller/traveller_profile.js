import Link from "next/link";


export default function travellerProfile() {
    return (
      <div>
        <h1>This is traveller profile</h1>

        <Link href="traveller_update">Update traveller Data</Link><br></br><br></br>
        <Link href="delete_traveller_id">Delete traveller Id</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      </div>
    )
  }