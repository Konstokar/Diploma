import React, { ReactNode } from 'react';
import styles from './HeaderLayout.module.scss'


interface HeaderLayoutProps {
    children: ReactNode;
  }
  
  const BaseLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
    return (
      <header className={styles.header}>
        {children}
      </header>
    );
  };
  
  export default BaseLayout;