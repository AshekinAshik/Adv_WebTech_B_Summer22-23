import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';


const Home = () => {
  return (
    <>
      {/* <SessionCheck /> */}

      <Layout title="Home">
        <div class="px-2 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <center>
            <p class="text-center text-3xl text-black font-normal">"Trip Connect is a comprehensive web-based Tour Management system that serves both travelers and tour guides. Seamlessly merging the needs of these two vital components of travel, the platform offers a wide array of features and functionalities. For travelers, Trip Connect provides a user-friendly interface to plan and organize their trips, offering tools to search for tours, manage itineraries, and make bookings. On the other hand, for tour guides, the system offers robust tools to create and manage tours, communicate with travelers, and efficiently handle logistics. With its intuitive design and a suite of features catering to both travelers and tour guides, Trip Connect redefines the way tours are planned, managed, and experienced, enhancing the overall travel journey for all parties involved."</p>
          </center>
        </div>

      </Layout>
    </>
  )
};

export default Home;
