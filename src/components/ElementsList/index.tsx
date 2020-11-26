/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './ElementsList.module.css';

interface ElementsListProps {
    title: string;
    elements: Array<{ label: string; description: string; onClick: () => void }>;
}
const ElementsList = ({ title, elements }: ElementsListProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {elements.map((element, index) => {
                return (
                    <div className={styles.elementContainer} key={index}>
                        <div
                            className={styles.clickable}
                            onClick={element.onClick}
                            onKeyDown={element.onClick}
                            role="link"
                            tabIndex={0}
                        >
                            <h2 className={styles.elementLabel}>{element.label}</h2>
                            <p className={styles.elementDescription}>{element.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default ElementsList;
