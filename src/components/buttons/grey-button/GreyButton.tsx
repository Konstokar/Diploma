import React from 'react';
import styles from './GreyButton.module.scss';

interface GreyButtonProps {
    text: string;
    onClick: () => void;
}

const GreyButton: React.FC<GreyButtonProps> = ({ text, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default GreyButton;