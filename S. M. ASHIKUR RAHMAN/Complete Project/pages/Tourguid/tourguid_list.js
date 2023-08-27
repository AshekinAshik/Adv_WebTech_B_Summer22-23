import Link from "next/link";
import Meta from "../meta";
import React from "react";
import SessionCheck
 from "../Component/session";

const TourGuidList =() => {
    return (
      <React.Fragment>
        <center>
        <SessionCheck/>
       <Meta title="Tourguid List" keywords="ashik" description ="Ashik" />
       <div className="bg-blue-700 p-10 text-white p-4">

<h6 className=" font-bold ">
  All Tourguid Information
</h6>


</div><br></br>

        <Link href="update_tourguid"><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Tourguid Data</button></Link><br></br><br></br>

<Link href="tourguid_all_data"><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tourguid Data</button></Link><br></br>

        {/* <Link href="delete_tourguid">Delete TourGuid</Link><br></br><br></br> */}
        

        <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>
        </center>
      </React.Fragment>
    );
  }

export default  TourGuidList