import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='bg-primary-brown p-8 text-white font-fredoka font-semibold text-lg'>
      <div className='flex gap-2'>
        <img src='/images/Logo_cow.svg' alt='app logo' />
        <p className='self-end'>Mi &nbsp;Vaquita</p>
        <FontAwesomeIcon
          icon={faUserCircle}
          className='text-white ml-auto mt-auto size-8'
        />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
