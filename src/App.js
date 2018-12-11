import React, { Component } from 'react';
import './style/style.scss';

import { I18n } from 'react-i18nify';
import { Logo } from './shared/components/Logo';
import { NavigationHeader } from './navigation/components/NavigationHeader';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
    componentDidMount() {
        document.title = I18n.t('application.title');
    }

    render() {
        return (
            <React.Fragment>
                <NavigationHeader />
                <main role="main" class="container">
                    <div className="row">
                        <div className="col-6">
                            <Logo />
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button color="info">Start!</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
