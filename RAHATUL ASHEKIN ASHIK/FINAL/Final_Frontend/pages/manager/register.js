import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import HeaderSeparate from '../layout/title';
import MyFooter from '../layout/footer';
import Title from '../layout/title';

const DynamicRegisterForm = dynamic(() => import('../component/registerForm'), { ssr: false });

const SignUpPage = () => {
  return (
    <>
      <Title name="Register" />

      <Link href="/manager"> <h1 align="center" className="bg-green-500 text-6xl text-white font-extrabold p-6">TRIP CONNECT</h1> </Link>
      <section class="bg-center p-44 bg-cover bg-no-repeat bg-[url('https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg')] bg-gray-700 bg-blend-multiply">

        <div>
          {/* <SignUpForm /> */}

          <DynamicRegisterForm />
        </div>

        <div>
          <MyFooter />
        </div>
      </section>
    </>
  );
};

export default SignUpPage;