/* Copyright (c) 2022 CiderBoi */
  
import { lightTheme, darkTheme, blueTheme, lavTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'wexond-light') return lightTheme;
  else if (name === 'wexond-dark') return darkTheme;
  else if (name === 'webowser-blue') return blueTheme;
  else if (name === 'webowser-lavender') return lavTheme;
  return darkTheme;
};
