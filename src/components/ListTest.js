import React, { Component } from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Baller-Ass List' />

    <ListItem
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItem
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItem
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
    <ListItem
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItem
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItem
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
    <ListItem
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItem
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItem
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />

    <ListDivider />
    <ListItem caption='Contact the publisher' leftIcon='send' />
    <ListItem caption='Remove this publication' leftIcon='delete' />

  </List>
);

export default ListTest;
