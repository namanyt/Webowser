/* Copyright (c) 2022 CiderBoi */

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

import { StyledApp } from './style';
import store from '../../store';
import { DownloadItem } from '../DownloadItem';
import { ipcRenderer } from 'electron';
import { UIStyle } from '~/renderer/mixins/default-styles';

export const App = observer(() => {
  const height = 8 + Math.min(8, store.downloads.length) * (64 + 8);
  ipcRenderer.send(`height-${store.id}`, height);

  return (
    <ThemeProvider theme={{ ...store.theme }}>
      <StyledApp style={{ maxHeight: "500px" }} visible={store.visible}>
        <UIStyle />
        {store.downloads.map((item) => (
          <DownloadItem item={item} key={item.id}></DownloadItem>
        ))}
      </StyledApp>
    </ThemeProvider>
  );
});
