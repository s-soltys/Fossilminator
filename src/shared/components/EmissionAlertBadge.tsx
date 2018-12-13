import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';

export const EmissionAlertBadge = () => (
    <Alert color="danger">
        <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>
)