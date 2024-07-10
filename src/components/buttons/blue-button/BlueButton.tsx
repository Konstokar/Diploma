import React from 'react';
import styles from './BlueButton.module.scss';

interface BlueButtonProps {
    text: string;
    onClick: () => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({ text, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default BlueButton;