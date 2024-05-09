// import { Link } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="container">
          <div className="footer__body">
            <div className="footer__main">
              <Link to="/" className="footer__logo">
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.12073 40.0004V12.2227H9.63797V40.0004H1.12073Z"
                    fill="#2F353F"
                  />
                  <path
                    d="M12.1035 19.7782V12.2227H39V19.7782H30.0345V40.0004H21.069V19.7782H12.1035Z"
                    fill="#2F353F"
                  />
                  <path
                    d="M7.13793 4.81896V7.5H5C3.61929 7.5 2.5 6.38071 2.5 5V4.81897C2.5 3.53824 3.53824 2.5 4.81897 2.5C6.09969 2.5 7.13793 3.53824 7.13793 4.81896Z"
                    stroke="#2F353F"
                    strokeWidth="5"
                  />
                </svg>
              </Link>
              <a
                href="mailto:itsupportgroup@gmail.com"
                className="footer__email"
              >
                itsupportgroup@gmail.com
              </a>
              <div className="footer__social social-footer">
                <Link to="/" target="_blank" className="social-footer__link">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_205_100"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="46"
                      height="46"
                    >
                      <path
                        d="M0.5 0.500004H45.5V45.5H0.5V0.500004Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_205_100)">
                      <path
                        d="M30.9102 23C30.9102 27.3687 27.3687 30.9102 23 30.9102C18.6313 30.9102 15.0898 27.3687 15.0898 23C15.0898 18.6313 18.6313 15.0898 23 15.0898C27.3687 15.0898 30.9102 18.6313 30.9102 23Z"
                        stroke="#2E2BD0"
                        strokeWidth="1.125"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.4531 38.9082C9.54069 38.9082 7.0918 36.4593 7.0918 33.5469V12.4531C7.0918 9.5407 9.54069 7.0918 12.4531 7.0918H33.5469C36.4593 7.0918 38.9082 9.5407 38.9082 12.4531V33.5469C38.9082 36.4593 36.4593 38.9082 33.5469 38.9082H12.4531Z"
                        stroke="#2E2BD0"
                        strokeWidth="1.125"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.5469 13.7715C33.5469 14.4996 32.9566 15.0898 32.2285 15.0898C31.5004 15.0898 30.9102 14.4996 30.9102 13.7715C30.9102 13.0434 31.5004 12.4531 32.2285 12.4531C32.9566 12.4531 33.5469 13.0434 33.5469 13.7715Z"
                        stroke="#2E2BD0"
                        strokeWidth="1.125"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>
                <Link to="/" target="_blank" className="social-footer__link">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4375 39.125C16.25 40.8125 19.625 41.75 23 41.75C33.3125 41.75 41.75 33.3125 41.75 23C41.75 12.6875 33.3125 4.25 23 4.25C12.6875 4.25 4.25 12.6875 4.25 23C4.25 26.375 5.1875 29.5625 6.6875 32.375L4.58033 40.4795C4.43429 41.0412 4.95419 41.5488 5.51224 41.3894L13.4375 39.125Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.4375 28.3409C31.4375 28.6447 31.3699 28.9569 31.2262 29.2606C31.0826 29.5644 30.8967 29.8513 30.6516 30.1213C30.2376 30.5769 29.7813 30.9059 29.2658 31.1169C28.7588 31.3278 28.2095 31.4375 27.618 31.4375C26.7561 31.4375 25.835 31.235 24.8633 30.8216C23.8915 30.4081 22.9197 29.8513 21.9564 29.1509C20.9846 28.4422 20.0636 27.6575 19.1847 26.7884C18.3144 25.9109 17.5285 24.9913 16.8271 24.0294C16.1342 23.0675 15.5765 22.1056 15.1709 21.1522C14.7653 20.1903 14.5625 19.2706 14.5625 18.3931C14.5625 17.8194 14.6639 17.2709 14.8667 16.7647C15.0695 16.25 15.3906 15.7775 15.8385 15.3556C16.3793 14.8241 16.9708 14.5625 17.5961 14.5625C17.8327 14.5625 18.0693 14.6131 18.2806 14.7144C18.5003 14.8156 18.6946 14.9675 18.8467 15.1869L20.8072 17.9459C20.9593 18.1569 21.0691 18.3509 21.1452 18.5366C21.2212 18.7138 21.2635 18.8909 21.2635 19.0513C21.2635 19.2538 21.2043 19.4562 21.086 19.6503C20.9762 19.8444 20.8156 20.0469 20.6128 20.2494L19.9706 20.9159C19.8777 21.0087 19.8354 21.1184 19.8354 21.2534C19.8354 21.3209 19.8439 21.38 19.8608 21.4475C19.8861 21.515 19.9115 21.5656 19.9284 21.6162C20.0805 21.8947 20.3424 22.2575 20.7142 22.6963C21.0945 23.135 21.5001 23.5822 21.9395 24.0294C22.3958 24.4766 22.8352 24.89 23.2831 25.2697C23.7225 25.6409 24.0858 25.8941 24.3732 26.0459C24.4154 26.0628 24.4661 26.0881 24.5253 26.1134C24.5929 26.1387 24.6605 26.1472 24.7365 26.1472C24.8802 26.1472 24.99 26.0966 25.083 26.0038L25.7252 25.3709C25.9364 25.16 26.1392 24.9997 26.3336 24.8984C26.5279 24.7803 26.7223 24.7212 26.9336 24.7212C27.0941 24.7212 27.2631 24.755 27.449 24.8309C27.6349 24.9069 27.8293 25.0166 28.0405 25.16L30.8375 27.1428C31.0572 27.2947 31.2093 27.4719 31.3023 27.6828C31.3868 27.8937 31.4375 28.1047 31.4375 28.3409Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </Link>
                <Link to="/" target="_blank" className="social-footer__link">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.875 14.1875V19.625H29.75C30.125 19.625 30.3125 20 30.3125 20.375L29.5625 23.9375C29.5625 24.125 29.1875 24.3125 29 24.3125H24.875V38H19.25V24.5H16.0625C15.6875 24.5 15.5 24.3125 15.5 23.9375V20.375C15.5 20 15.6875 19.8125 16.0625 19.8125H19.25V13.625C19.25 10.4375 21.6875 8 24.875 8H29.9375C30.3125 8 30.5 8.1875 30.5 8.5625V13.0625C30.5 13.4375 30.3125 13.625 29.9375 13.625H25.4375C25.0625 13.625 24.875 13.8125 24.875 14.1875Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                <Link to="/" target="_blank" className="social-footer__link">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.625 34.25H12.875V19.25H16.625V34.25Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.625 13.625C16.625 14.6606 15.7855 15.5 14.75 15.5C13.7145 15.5 12.875 14.6606 12.875 13.625C12.875 12.5894 13.7145 11.75 14.75 11.75C15.7855 11.75 16.625 12.5894 16.625 13.625Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.125 25.8125C24.125 24.2592 25.3842 23 26.9375 23C28.4908 23 29.75 24.2592 29.75 25.8125V34.25H33.5V24.1588C33.5 23.3968 33.3226 22.6451 32.9817 21.9635C31.3204 18.6409 26.7586 18.4914 24.5623 20.6878L24.125 21.125V19.25H20.375V34.25H24.125V25.8125Z"
                      stroke="#2E2BD0"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="footer__menu menu-footer">
              <div className="menu-footer__item">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <Link to="/#advantages" className="menu-footer__link">
                      почему мы?
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link to="/#services" className="menu-footer__link">
                      наш сервис
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-footer__item">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <Link to="/#direction" className="menu-footer__link">
                      направления
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link to="/#steps" className="menu-footer__link">
                      этапы работы
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__actions">
              <Link to="/" className="footer__link btn">
                контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
