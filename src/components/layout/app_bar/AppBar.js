import React, { Component } from 'react';
import {  AppBar as AppBarRTB,
          Navigation as NavigationRTB,
          Link as LinkRTB } from 'react-toolbox';

import { SettingsMenu } from './settings_menu'

const AppBar = () => (
  <AppBarRTB title='Lead Machine' theme={theme} >
    <NavigationRTB type='horizontal'>
      <LinkRTB href='http://' active label='Home'/>
      <LinkRTB href='http://' label='Profile'/>
      <LinkRTB href='http://' icon='message'/>
      <LinkRTB href='http://' icon='person'/>
      <SettingsMenu />
    </NavigationRTB>
  </AppBarRTB>
);

export default AppBar;
