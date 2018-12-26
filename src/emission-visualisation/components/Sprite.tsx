import React from "react";

export const Sprite = ({ visible, file, alt, size, left, right, top, bottom }: any) => {
    if (!visible && typeof visible !== 'undefined') return null;

    return (
        <img src={`images/ui/${file}`} alt={alt}
            style={{
                position: 'absolute',
                left: left && left + '%',
                right: right && right + '%',
                top: top && top + '%',
                bottom: bottom && bottom + '%',
                width: size + '%'
            }} />
    );
};
