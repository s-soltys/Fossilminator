import React from 'react';
import { EmissionUnits } from '../../emission-calculator';
import { emissionResultLabel } from '../util';

interface Props {
    emission: EmissionUnits;
}

export const EmissionResultLabel = ({ emission }: Props) => {
    switch (true) {
        default: {
            return (
                <>{emissionResultLabel(emission)} tCO2<sub>e</sub></>
            );
        }
    }
}