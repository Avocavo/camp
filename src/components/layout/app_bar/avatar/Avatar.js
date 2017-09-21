import React, { Component } from 'react';
import  { Avatar as AvatarRTB } from 'react-toolbox/lib/avatar';
import RTLink from 'react-toolbox/lib/link/Link.js';

const Avatar = () => (
  <RTLink href='http://'>
    <AvatarRTB image="https://c2.staticflickr.com/8/7197/6941696555_db860e0b98_b.jpg" cover />
  </RTLink>
);

export default Avatar;
