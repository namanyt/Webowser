/* Copyright (c) 2022 CiderBoi */

export type BrowserActionChangeType =
  | 'setPopup'
  | 'setBadgeText'
  | 'setTitle'
  | 'setColor'
  | 'setIcon'
  | 'setBadgeBackgroundColor';

export const BROWSER_ACTION_METHODS: BrowserActionChangeType[] = [
  'setPopup',
  'setBadgeText',
  'setTitle',
  'setColor',
  'setIcon',
  'setBadgeBackgroundColor',
];