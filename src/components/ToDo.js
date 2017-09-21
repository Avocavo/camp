import React, { Component } from 'react';

export default class ToDo extends React.Component {
    render() {
        return (
              <div>
              <ul>
              <li>Navigation Tabs
                  <ul>
                    <li>Home</li>
                    <li>Sign Up / My Profile</li>
                    <li>Contact Us</li>
                    <li>404</li>
                  </ul>
                </li>
                <li>Main Content
                  <ul>
                    <li>one line intro</li>
                  <li>images / slideshow</li>
                  <li>benefits</li>
                </ul></li>
                <li>Footer</li>
              </ul>
              </div>
        );
    }
}
