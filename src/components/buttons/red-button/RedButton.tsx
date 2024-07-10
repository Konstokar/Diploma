import React from 'react';
import styles from './Button.module.scss';

interface RedButtonProps {
    text: string;
    onClick: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({ text, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default RedButton;