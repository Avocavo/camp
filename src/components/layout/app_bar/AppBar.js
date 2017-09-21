import React, { Component } from 'react';
import {  AppBar as AppBarRTB,
          Navigation as NavigationRTB,
          Link as LinkRTB } from 'react-toolbox';
import RTLink from 'react-toolbox/lib/link/Link.js';

import { SettingsMenu } from './settings_menu';
import { Avatar } from './avatar';

import theme from './app_bar.css';

const AppBar = () => (
  <AppBarRTB title='Lead Machine' theme={theme} flat>
    <NavigationRTB type='horizontal'>
      <LinkRTB href='/' active label='Home' />
      <LinkRTB href='/#/signup' label='Signup' />
      <LinkRTB href='/#/login' label='Login' />
      <LinkRTB href='/#/messages' icon='message' />
      <SettingsMenu />
      <RTLink href='/#/profile'>
        <Avatar />
      </RTLink>
    </NavigationRTB>
  </AppBarRTB>
);

export default AppBar;
