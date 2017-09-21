import React, { Component } from 'react';
import {  List as ListRTB,
          ListItem as ListItemRTB,
          ListSubHeader as ListSubHeaderRTB,
          ListDivider as ListDividerRTB,
          ListCheckbox as ListCheckboxRTB } from 'react-toolbox/lib/List';

const List = () => (
  <ListRTB selectable ripple>
    <ListSubHeaderRTB caption='My List' />

    <ListItemRTB
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItemRTB
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItemRTB
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
    <ListItemRTB
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItemRTB
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItemRTB
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
    <ListItemRTB
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItemRTB
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItemRTB
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />

    <ListDividerRTB />
    <ListItemRTB caption='Contact the publisher' leftIcon='send' />
    <ListItemRTB caption='Remove this publication' leftIcon='delete' />

  </ListRTB>
);

export default List;
