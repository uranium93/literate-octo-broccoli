import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    type: 'contained' | 'flat' | 'outlined';
    onClick: () => void;
    size?: 'big' | 'small' | 'medium';
}
const Button = ({ label, onClick, type, size }: ButtonProps) => {
    return (
        <button className={`${styles.Button} ${styles[type]} ${styles[size]}`} onClick={onClick} type="button">
            <span className={styles.label}>{label || 'Click Me'}</span>
        </button>
    );
};
export default Button;

Button.defaultProps = {
    size: 'big',
};
