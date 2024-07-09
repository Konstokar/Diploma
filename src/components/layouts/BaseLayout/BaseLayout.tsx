import React, { ReactNode } from 'react';
import styles from './BaseLayout.module.scss'


interface BaseLayoutProps {
    children: ReactNode;
  }
  
  const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
      <div className={styles.main}>
        {children}
      </div>
    );
  };
  
  export default BaseLayout;