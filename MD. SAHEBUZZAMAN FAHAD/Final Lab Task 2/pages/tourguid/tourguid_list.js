import Link from "next/link";
import Meta from "../meta";
import React from "react";

const TourGuidList =() => {
    return (
      <React.Fragment>
       <Meta title="Tourguid List" keywords="fahad" description ="Fahad" />
        <h1>This is Tourguid List</h1>

        <Link href="update_tourguid">Update Tourguid Data</Link><br></br><br></br>


        <Link href="delete_tourguid">Delete TourGuid</Link><br></br><br></br>

        <Link href="/home">Home</Link>
    
      </React.Fragment>
    );
  }

export default  TourGuidList