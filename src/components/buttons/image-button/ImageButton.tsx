import React from 'react';
import styles from './ImageButton.module.scss';

interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt, onClick }) => {
    return (
        <button className={styles.imageButton} onClick={onClick}>
            <img src={src} alt={alt} className={styles.image} />
        </button>
    );
};

export default ImageButton;