import React from 'react';
import { Logo } from '../../shared/components/Logo';
import { Translate } from 'react-i18nify';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

interface Props {
    title: string;
}

export const WelcomePage = ({ title }: Props) => (
    <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <Logo />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{ title || 'Default title' }</CardTitle>
                    <CardSubtitle>This is a subtitle...</CardSubtitle>
                    <CardText>THE best example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">
                        <Translate value="actions.calculateUsage" />
                    </Button>
                </CardBody>
            </Card>
        </div>
    </div>
);