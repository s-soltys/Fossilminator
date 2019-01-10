import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';

export const EmissionAlertBadge = ({ emission }: any) => {
    if(emission > 20){
        return(
             <Alert color="danger">
                <Translate value="emissions.yourEmissionsAreTooHigh" />
             </Alert>
        )
    }
    else if(emission >= 10 && emission <= 20){
        return(
            <Alert color="warning">
                <Translate value="emissions.yourEmissionsAreStandard" />
            </Alert>
        )
    }
    else{
        return(
            <Alert color="success">
                <Translate value="emissions.yourEmissionsAreLow" />
            </Alert> 
        )
    }
};
