/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { FOOTER_LINKS } from '../../constants';

import { Logo } from '../Logo';
import { Icon } from '../Icon/Icon';

import './Footer.scss';
import { useEffect, useState } from 'react';

type Props = {
  classNames: string;
};

const MIN_SCROLLED_VALUE = 200;

export const Footer: React.FC<Props> = ({ classNames }) => {
  const [showButton, setShowButton] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > MIN_SCROLLED_VALUE) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={cn('footer', classNames)}>
      <Logo classNames="footer__logo" />
      <ul className="footer__list">
        {Object.entries(FOOTER_LINKS).map(([key, value]) => (
          <li className="footer__item" key={key}>
            <Link
              to={key === 'Contacts' ? `mailto:${value}` : value}
              className="footer__link"
              target="_blank"
            >
              {key.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <div className="footer__back-to-top back-to-top">
        {showButton && (
          <>
            <span className="back-to-top__text">Back to top</span>
            <button
              type="button"
              className="back-to-top__button"
              onClick={handleBackToTop}
            >
              <Icon iconName="arrowUp" classNames="back-to-top__icon" />
            </button>
          </>
        )}
      </div>
    </footer>
  );
};
