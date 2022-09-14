/* Copyright (c) 2022 CiderBoi */

import store from '../store';

export const onSwitchChange = (key: string) => () => {
  (store.settings as any)[key] = !(store.settings as any)[key];
  store.save();
};
