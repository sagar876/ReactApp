import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import Basic from './Basic';
import Inline from './Inline';
import Image from './Image';

export default class Plugins extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Basic />
                <Inline />
                <Image />
            </div>
        );
    }
}

