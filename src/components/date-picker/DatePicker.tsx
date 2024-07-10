import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';

// Определение интерфейса для пропсов компонента
interface DatePickerComponentProps {
    label: string;
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}

// Функциональный компонент DatePickerComponent
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ label, selectedDate, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                className={styles.input}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default DatePickerComponent;