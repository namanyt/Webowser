/* Copyright (c) 2022 CiderBoi */

import { IHistoryItem } from './history-item';

export interface IHistorySection {
  label?: string;
  items?: IHistoryItem[];
  date?: Date;
}
