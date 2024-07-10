import React from 'react';
import styles from './DropList.module.scss';

interface DropListProps {
    label: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropListProps> = ({ label, options, selectedValue, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select className={styles.select} value={selectedValue} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;