import React, { Component } from 'react';
import {  AppBar as AppBarRTB,
          Navigation as NavigationRTB,
          Link as LinkRTB } from 'react-toolbox';
import { Avatar } from './avatar'
import { SettingsMenu } from './settings_menu'
import theme from './app_bar.css';

const AppBar = () => (
  <AppBarRTB title='Lead Machine' theme={theme} flat>
    <NavigationRTB type='horizontal'>
      <LinkRTB href='http://' active label='Home'/>
      <LinkRTB href='http://' label='Signup'/>
      <LinkRTB href='http://' label='Login' />
      <LinkRTB href='http://' icon='message'/>
      <SettingsMenu />
      <Avatar />
    </NavigationRTB>
  </AppBarRTB>
);

export default AppBar;
