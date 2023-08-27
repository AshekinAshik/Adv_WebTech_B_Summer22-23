import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import Meta from './meta'



const inter = Inter({ subsets: ['latin'] })



const Home = () => {



  return (


    <React.Fragment>





      <Meta title="Home Page" keywords="ashik" description="Ashik" />
      <center>
        <div className="bg-blue-700 p-10 text-white p-4">

          <h6 className=" font-bold ">
            THIS IS HOME PAGE
          </h6>


        </div><br></br>

        <Link href="./Traveller/traveller_profile"><button class="bg-white-600 ...">
          <p className="text-white bg-pink-600 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Traveller Data</p>
        </button></Link><br></br>

        <Link href="./Tourguid/tourguid_list"><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Tourguid List</button>
<button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link href="./Places/tourist_spot">Tourist Spot</Link><br></br></button></Link><br></br>
        
<section class="bg-center bg-no-repeat bg-[url('/nature.jpeg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-15 lg:py-36">
        <h1 class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Join us in exploring the wonders of the world, One destination at a time</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-44">Welcome to Trip Connect, your gateway to seamless travel experiences. Discover a world of convenience as we link you to the most captivating destinations, creating meaningful connections through unforgettable journeys.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="./Traveller/traveller_log" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link href="./about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
</section>



        {/* <p><p class="tracking-normal text-black-500 md:text-lg dark:text-black-400">If you are not register</p><Link href="./Traveller/traveller_reg"><button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button></Link></p>
        <p><p class="tracking-normal text-black-500 md:text-lg dark:text-black-400">Already have a account</p> <Link href="./Traveller/traveller_log"><button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button></Link></p> */}
        {/* <Image
          src="/joss.jpg"
          alt="Photo"
          height={250}
          width={400}
        /> */}
      </center>





    </React.Fragment>

  );
}



export default Home