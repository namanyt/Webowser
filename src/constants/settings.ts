/* Copyright (c) 2022 CiderBoi */

import { ISettings } from '~/interfaces';
import { app } from 'electron';

export const DEFAULT_SEARCH_ENGINES = [
  {
    name: 'Google',
    url: "https://www.google.com/search?q=%s&theme=dark",
    keywordsUrl: 'http://google.com/complete/search?client=chrome&q=%s',
    keyword: 'google.com',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACDVBMVEUAAAD+/v7+/v79/f39/f39/f39/f39/f3+/v7+/v79/f39/f39/f39/f3+/v7////9/f39/f39/f39/f3+/v7+/v79/f39/f3+/v7+/v79/f39/f3////+/v79/f3////9/f3+/v7+/v79/f39/f39/f3+/v7////9/f3+/v79/f39/f39/f3////9/f3////+/v7////85uT1pZ7wdGrsVUjqRjjqRTfsU0bvcmj1oZr85OL85+XxgXjqRDbqQzXxf3b3urXrSz7rTD/4v7r1p6DyioHuZVn0m5P3tK73ta/0m5TuZlryjob//v7rSj3tXFD5zMj5y8fsWEzzlIz0kG3vbGH+8vL+9fT+9t37uQfxdyD98O7934b7vAX1kxXrSTT3uLP8zUb5riH/+/v7whz801lChfS/1fv7vQf93H2lxfqfwfn80liqyPr8zkfkwi76/fve6v3B1/v934iztSE8qFCw3byox/rn8P7+9t/2vAmGsDM0qFNGsGLs9+/z9/5UkPVgmfaPx4JcuXXw+fL6/P93p/epyPrm9Oo+rFtMsmfC5cza7+BjsahChfH2+f634MJUtm6Nzp+q2rer27iV0qVkvHs1qFQ3oHdBiePD2Pyj2LE1pWA+jsq54cQ+rFw3qVab0rHn9et7xo82qVRnvn7X7t2h169swIJJsWU4qlZGsGNlvX3Y7t5rzgcKAAAAMXRSTlMADlqcy+367Fknn/f2nSUKjfz7iwkm1dIkMuvqMAuKD/UNV5nI+VYMmiOH09AI6CIvZ7+SkQAAAe5JREFUOMtjYIADRiZmFlY2NnYWZg5GBkzAycVtCAc8vHxo0vwCgoYoQEhYBFleVMwQA4hLIOQlpcBCRsYmpmbmFpZW1mCutAxcP1jextbOHgrsHGzAKqBmyILNd3SyRwLOLmBbIO4QALFd7VGBG9gWObD/QO53hAi7e3h6efsAGb5+EL+ALOECOc8fJB0QCHF/UHAIzCvMDAzyoPAJBcmHhcOEI+B+VVBkYAJSkVHR9vamMYZYgBIDM5CMjYuLT0jEJm+ozMACJJPi4uKSU7AqUGFgBZKpQAVpUJF0BMgABRYDG5DMBCrIwlSQDeSq4lOQA1bADrUiF1NBHtgKkCPzgQoKCpHdVgRSUAx2JMibJXFxpWXlyAoqQAoqwd7kAJJV1TW1tXX1CPmGRqB8E4ilxsDIA6Saa4GgpRUm39YOMqADFNTqDAy8QLqzC6Siuwci39vXD5RvnABkagBjk08IyJhYCwaTJk+ZOm36jNqZs9LTZwOF2TRBCUIYpGtOLQqYOw8UCIZakCSvDWLPX4CsYOEikJiOLiRRSkiDeIuXLIXLL1sOEtHThyVrGbAKw84VK1etXrhm7bR1YK6eASJjSIhjRrSOPnLWEpETQpVm09JFy50SzAoIaQUNTSz5W1FJWUVaVVVaRVlNHSEKACBb24XRQm7rAAAAAElFTkSuQmCC',
  }
];

export const DEFAULT_SETTINGS: ISettings = {
  theme: 'webowser-dark',
  darkContents: true,
  shield: true,
  multrin: true,
  animations: true,
  bookmarksBar: true,
  suggestions: true,
  themeAuto: true,
  httpsEnforce: false,
  searchEngines: DEFAULT_SEARCH_ENGINES,
  searchEngine: 0,
  startupBehavior: {
    type: 'empty',
  },
  warnOnQuit: false,
  version: 3,
  downloadsDialog: false,
  downloadsPath: app
    ? app.getPath('downloads')
    : process.type !== 'browser' && process.type !== 'renderer'
      ? require('@electron/remote').app.getPath('downloads')
      : app
        ? app.getPath('downloads')
        : '',
  doNotTrack: true,
  globalPrivacyControl: true,
  topBarVariant: 'default',
  invisibleTabs: undefined,
  notnew: false,
  changelog: '',
  tab: {
    image: '',
    topSites: false,
    pinned: false
  },
  token: ''
};
