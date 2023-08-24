import Link from 'next/link';
import dynamic from 'next/dynamic';
import MyFooter from '../layout/footer';
import Title from '../layout/title';

const DynamicLoginForm = dynamic(() => import('../component/loginForm'), { ssr: false });

const SignInPage = () => {
  return (
    <>
      <Title name="Login" />

      <Link href="/manager"> <h1 align="center" className="bg-green-500 text-6xl text-white font-extrabold p-6">TRIP CONNECT</h1> </Link>
      <section class="bg-center p-44 bg-cover bg-no-repeat bg-[url('https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg')] bg-gray-700 bg-blend-multiply">

        <div>
          {/* <LoginForm /> */}

          <DynamicLoginForm />
        </div>

        <div>
          <MyFooter />
        </div>
      </section>
    </>
  );
};

export default SignInPage;