import Logo from '../../assets/refy-logo.svg';

const Header = () => {
  return (
    <header className='flex items-center justify-center gap-6'>
      <img
        className='h-auto w-20 brightness-0 filter'
        src={Logo}
        alt='Refy Logo'
      />
      <h1 className='font-varela text-7xl font-semibold tracking-widest text-black'>
        Refy
      </h1>
    </header>
  );
};

export default Header;
