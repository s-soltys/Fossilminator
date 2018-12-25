import React from "react";
import { Translate } from "react-i18nify";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

export const EmissionFormWrapper = ({ title, footer, children }: any) => (
    <Card>
        <CardHeader>
            <Translate className="font-weight-light" value={title} />
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter>
            <div className="font-weight-light d-flex justify-content-between">
                {footer ? <Translate value={footer} /> : null}
            </div>
        </CardFooter>
    </Card>
);
