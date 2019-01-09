import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';

export const EmissionAlertBadge = ({ emission }: any) => {
    return (
        <Alert color="warning">
            <Translate value="emissions.yourEmissionsAreTooHigh" />
        </Alert>
    )
};
