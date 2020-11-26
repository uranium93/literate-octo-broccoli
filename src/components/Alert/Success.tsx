import React from 'react';
import Alert from 'react-bootstrap/Alert';
// import styles from './Alert.module.css'

interface AlertsSuccessProps {
    successMessage: string;
    onClose: () => void;
}
const AlertSuccess = ({ successMessage, onClose }: AlertsSuccessProps) => {
    return (
        <Alert variant="success" show={successMessage.length > 0} transition dismissible onClose={onClose}>
            {successMessage}
        </Alert>
    );
};
export default AlertSuccess;
