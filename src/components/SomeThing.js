import React, { Component } from 'react';
import AnotherThing from './some/directory';

export default class SomeThing extends React.Component {
    render() {
        return (
              <div>
                <AnotherThing />
                <AnotherThing />
              </div>
        );
    }
}
