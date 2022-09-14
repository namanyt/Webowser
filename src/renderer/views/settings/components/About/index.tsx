/* Copyright (c) 2022 CiderBoi */

import * as React from 'react';

import { Switch } from '~/renderer/components/Switch';
import { Title, Row, Control, Header, SecondaryText } from '../App/style';
import store from '../../store';
import { onSwitchChange } from '../../utils';
import { ipcRenderer } from 'electron';
import { observer } from 'mobx-react-lite';
import { NormalButton } from '../App';


const Location = observer(() => {
  return (
    <Row>
      <Title>
        Webowser is a private, personal Web Browser :p
        
        made by Ciderboi 🙂
      </Title>
    </Row>
  );
});

export const About = () => {
  return (
    <>
      <Header>About Webowser</Header>
      <Title>Your version of Webowser is v1.0.0</Title>
      <Location />
    </>
  );
};
