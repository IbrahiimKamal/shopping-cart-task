import { Link } from 'react-router-dom';

import { navbarLinks } from '../../utils/navbarLinks';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navStyle}>
      <div className="container">
        <ul className={styles.list}>
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <Link className={styles.link} to={item.path}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
