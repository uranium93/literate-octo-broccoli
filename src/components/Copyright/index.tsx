/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import styles from './CopyRight.module.css';

const CopyRight = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/#">Privacy policy </Link>
                <Link href="/#">Terms & Conditions </Link>
            </div>

            <span className={styles.label}>© 2020 John Doe. All rights reserved</span>
        </div>
    );
};
export default CopyRight;
