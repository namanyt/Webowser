/* Copyright (c) 2022 CiderBoi */

import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { StyledTopSites, Placeholder } from './style';
import store from '../../store';
import { TopSite } from '../TopSite';

export const TopSites = observer(
  ({ backgroundColor }: { backgroundColor: string }) => {
    return (
      <StyledTopSites>
        {store.topSites.map((item) => (
          <TopSite
            key={item._id}
            item={item}
            backgroundColor={backgroundColor}
          />
        ))}
        {store.topSites.length < 8 && (
          <TopSite backgroundColor={backgroundColor} />
        )}
        {Array(8 - Math.min(8, store.topSites.length + 1))
          .fill(1)
          .map((v, i) => (
            <Placeholder key={i} />
          ))}
      </StyledTopSites>
    );
  },
);
