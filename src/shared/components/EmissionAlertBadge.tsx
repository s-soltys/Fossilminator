import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';

export const EmissionAlertBadge = ({ emission }: any) => (
    <Alert color="warning">
        <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>
);
