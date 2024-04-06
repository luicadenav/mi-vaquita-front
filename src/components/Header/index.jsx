import Navbar from '../Navbar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div>
        <img src='/images/Logo_cow.svg' alt='app logo' />
        <p className={styles.header_app_name}>Mi &nbsp;Vaquita</p>
        <img
          className={styles.header_user_icon}
          src='/icons/user-circle.svg'
          alt='user icon'
        />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
