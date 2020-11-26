import React from 'react';
import Alert from 'react-bootstrap/Alert';
// import styles from './Alert.module.css'

interface AlertErrorProps {
    errorMessage: string;
    onClose: () => void;
}
const AlertError = ({ errorMessage, onClose }: AlertErrorProps) => {
    return (
        <Alert variant="danger" show={errorMessage.length > 0} transition dismissible onClose={onClose}>
            {errorMessage}
        </Alert>
    );
};
export default AlertError;
