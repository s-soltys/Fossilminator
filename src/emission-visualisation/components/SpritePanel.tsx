import React from 'react';

export class SpritePanel extends React.Component<any> {
    imageRef = React.createRef<HTMLImageElement>();

    render() {
        const { file, alt, children } = this.props;

        return (
            <div className="w-100" style={{ position: 'relative' }}>
                <img className="w-100" src={"images/ui/" + file} alt={alt} ref={this.imageRef} />
                {!!children ? children : null}
            </div>
        );
    }
}