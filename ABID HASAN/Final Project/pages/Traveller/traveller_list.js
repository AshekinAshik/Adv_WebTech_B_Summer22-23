import Link from "next/link";
import React from "react";
import SessionCheck from "../HLT/sessioncheck";

const TravellerList =() => {

    return (
      < >
      

       <SessionCheck/>
        <div >
        <h1>This is Traveller List</h1>

        <Link href="TG_addtraveller"> Add Traveller</Link><br></br><br></br>

        <Link href=""></Link> 
        { /*i will update traveller if needed */}

        <Link href="/TourGuide/TG_viewProfile"> All Traveller Info</Link><br></br><br></br>
        <Link href="TG_remove_traveller">Delete Traveller</Link><br></br><br></br>

        <Link href="/TourGuide/TG_profile">Home</Link>
        </div>
    
      </>
    );
  }

export default  TravellerList
