import React, { ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
    children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
      <header className={styles.header}>
        {children}
      </header>
    );
  };

export default Header;