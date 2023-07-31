import Link from "next/link";


export default function TourGuidList() {
    return (
      <div>
        <h1>This is Tourguid List</h1>

        <Link href="update_tourguid">Update Tourguid Data</Link><br></br><br></br>


        <Link href="delete_tourguid">Delete TourGuid</Link><br></br><br></br>

        <Link href="/home">Home</Link>
      </div>
    )
  }