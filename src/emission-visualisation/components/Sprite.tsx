import React from "react";

export const Sprite = ({ file, alt, size, left, right, top, bottom }: any) => (
    <img
        style={{
            position: 'absolute',
            left: left && left + '%',
            right: right && right + '%',
            top: top && top + '%',
            bottom: bottom && bottom + '%',
            width: size + '%'
        }}
        src={`images/ui/${file}`}
        alt={alt}
    />
);