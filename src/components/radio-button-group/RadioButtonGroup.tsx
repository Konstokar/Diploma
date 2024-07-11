import React from 'react';
import styles from './RadioButtonGroup.module.scss';

interface Option {
    label: string;
    value: string;
}

interface RadioButtonGroupProps {
    name: string;
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ name, options, selectedValue, onChange }) => {
    return (
        <div className={styles.radioButtonGroup}>
            {options.map((option) => (
                <label key={option.value} className={styles.radioLabel}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className={styles.radioInput}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default RadioButtonGroup;