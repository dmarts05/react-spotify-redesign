import Header from './Header';

const Login = () => {
  const loginHandler = () => {
    const clientId = '78b50d33b0f444c6a69a2efca5837cee';
    const redirectUri = 'http://localhost:5173/';
    const apiUri = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-top-read',
    ];
    window.location.href = `${apiUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className='grid h-screen-small place-content-center gap-6 bg-green-400'>
      <Header />
      <button
        onClick={loginHandler}
        className='m-auto rounded-full bg-black py-2 px-6 font-semibold uppercase text-green-300 transition-transform active:scale-95'
      >
        Connect
      </button>
    </div>
  );
};

export default Login;
