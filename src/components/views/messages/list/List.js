import React, { Component } from 'react';
import {  List as ListRTB,
          ListItem as ListItemRTB,
          ListSubHeader as ListSubHeaderRTB,
          ListDivider as ListDividerRTB,
          ListCheckbox as ListCheckboxRTB } from 'react-toolbox/lib/List';

const List = () => (
  <ListRTB selectable ripple>
    <ListSubHeaderRTB caption='Recent' />

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
  </ListRTB>
);

export default List;
