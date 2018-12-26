import React from 'react';

export class SpritePanel extends React.Component<any> {
    imageRef = React.createRef<HTMLImageElement>();

    render() {
        const { name, alt, children } = this.props;

        return (
            <div className="w-100" style={{ position: 'relative' }}>
                <img className="w-100" src={"images/ui/" + name} alt={alt} ref={this.imageRef} />
                {!!children ? children : null}
            </div>
        );
    }
}