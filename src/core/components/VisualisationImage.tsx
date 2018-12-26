import React from 'react';

export const VisualisationImage = ({ name, alt, children }: any) => (
    <div className="w-100" style={{ position: 'relative' }}>
        <img className="w-100" src={"images/ui/" + name} alt={alt} />
        {!!children ? children : null}
    </div>
);