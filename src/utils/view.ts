/* Copyright (c) 2022 CiderBoi */

import { ipcRenderer } from 'electron';

export const callViewMethod = async (
  id: number,
  method: string,
  ...args: any[]
): Promise<any> => {
  try {
    return await ipcRenderer.invoke(`web-contents-call`, {
      args,
      method,
      webContentsId: id,
    });
  } catch {}
};
