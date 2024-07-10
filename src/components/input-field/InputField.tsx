import React from 'react';
import styles from './InputField.module.scss';

interface TextFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, placeholder }) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                defaultValue={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextField;