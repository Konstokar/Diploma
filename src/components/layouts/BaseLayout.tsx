import React, { ReactNode } from 'react';
import styles from './BaseLayout.module.scss'


interface BaseLayoutProps {
    children: ReactNode;
  }
  
  const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
      <span className={styles.main}>
        {children}
      </span>
    );
  };
  
  export default BaseLayout;