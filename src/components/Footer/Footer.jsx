import { Link } from 'react-router-dom';

import EmailInput from '../EmailInput/EmailInput';

import { footerLinks, footerSocialLinks } from '../../utils/footerLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerStyle}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.textContainer}>
            <img
              className={styles.logoStyle}
              src="/images/yellowLogo.svg"
              alt="logo"
            />
            <p className={styles.textStyle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. m nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
            <br />
            <p className={styles.textStyle}>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <br />
            <p className={styles.textStyle}>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit
            </p>
          </div>

          <div>
            <p className={styles.subTextStyle}>Subscribe to our newsletter</p>
            <EmailInput />
            <div className={styles.linksContainer}>
              <ul className={styles.linksListStyle}>
                {footerLinks.map((item) => (
                  <li key={item.id}>
                    <Link className={styles.linksStyle} to={item.path}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className={styles.linksSocialStyle}>
                {footerSocialLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      className={styles.socialItemStyle}
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        style={{ width: 25, marginRight: '.5rem' }}
                        src={item.icon}
                        alt={item.text}
                      />
                      <span className={styles.socialTextStyle}>
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rightsStyle}>
          <div>
            <div>
              &copy; {new Date().getFullYear()} yeshtery, all rights reserved.
            </div>
          </div>
          <div className={styles.visaStyle}>
            <img src="/images/pay1.png" alt="visa" />
            <img
              className={styles.visaImgStyle}
              src="/images/visa.png"
              alt="visa"
            />
            <img src="/images/pay2.png" alt="visa" />
          </div>
          <div className={styles.companyStyle}>
            <span>powerd by</span>
            <img src="/images/nasNav.svg" alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
