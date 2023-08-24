import Link from "next/link";
import Meta from "../meta";
import React from "react";

const TravelerList  = () => {
    return (
      <React.Fragment>
        <Meta title="Traveller List" keywords="fahad" description ="Fahad" />
        <h1>This is Traveler List</h1>
        <Link href="/home">Home</Link>
    
      </React.Fragment>
    );
  }

  
export default  TravelerList