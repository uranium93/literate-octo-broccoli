import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
    size?: number;
}
const Logo = ({ size }: LogoProps): JSX.Element => {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.stopeMeeting}>StopMeeting</div>
            <div className={styles.waste}>Waste</div>
        </div>
    );
};
export default Logo;

Logo.defaultProps = {
    size: 1,
};
