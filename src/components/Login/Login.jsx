import Header from './Header';

const Login = () => {
  return (
    <div className='grid h-screen-small place-content-center gap-6 bg-green-400'>
      <Header />
      <button className='m-auto rounded-full bg-black py-2 px-6 font-semibold uppercase text-green-300 transition-transform active:scale-95'>
        Connect
      </button>
    </div>
  );
};

export default Login;
