/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import LogoIconSVG from 'src/assets/svg/logoIcon.svg';
import router from 'next/router';
import styles from './Icon.module.css';

const LogoIcon = (): JSX.Element => {
    return (
        <div
            role="button"
            onKeyDown={() => {
                router.push('/');
            }}
            onClick={() => {
                router.push('/');
            }}
        >
            <LogoIconSVG />
        </div>
    );
};
export default LogoIcon;
