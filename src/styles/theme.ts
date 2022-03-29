import { CSSProperties, DefaultTheme } from 'styled-components';

type SpacingType = Record<
-3
| -2.5
| -2
| -1.75
| -1.5
| -1.25
| -1
| -0.75
| -0.5
| -0.25
| 0
| 0.25
| 0.5
| 0.75
| 1
| 1.25
| 1.5
| 1.75
| 2
| 2.5
| 3,
CSSProperties['padding'] | CSSProperties['margin']
>;

type HeightsType = Record<
'topbar'
| 'divider'
| 'inputField',
CSSProperties['height']
>;

type ColorsType = Record<
'transparent'
| 'black'
| 'white'
| 'gray1'
| 'gray2'
| 'gray3'
| 'gray4'
| 'gray5'
| 'gray6'
| 'gray7'
| 'accent'
| 'red'
| 'green',
CSSProperties['color']
>;

type FontSizesType = Record<
'xl'
| 'l'
| 'm'
| 's'
| 'xs',
CSSProperties['fontSize']
>;

type FontWeightsType = Record<
'normal'
| 'medium'
| 'semiBold'
| 'bold',
CSSProperties['fontSize']
>;

type ZIndexesType = Record<
0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10,
CSSProperties['zIndex']
>;

const theme: DefaultTheme = {
  spacing: {
    [-3]: '-24px',
    [-2.5]: '-20px',
    [-2]: '-16px',
    [-1.75]: '-14px',
    [-1.5]: '-12px',
    [-1.25]: '-10px',
    [-1]: '-8px',
    [-0.75]: '-6px',
    [-0.5]: '-4px',
    [-0.25]: '-2px',
    0: '0',
    0.25: '2px',
    0.5: '4px',
    0.75: '6px',
    1: '8px',
    1.25: '10px',
    1.5: '12px',
    1.75: '14px',
    2: '16px',
    2.5: '20px',
    3: '24px',
  },
  heights: {
    topbar: '50px',
    divider: '10px',
    inputField: '40px',
  },
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    gray1: '#F9F9F9',
    gray2: '#F3F3F3',
    gray3: '#F1F1F1',
    gray4: '#EEEEEE',
    gray5: '#CCCCCC',
    gray6: '#AAAAAA',
    gray7: '#777777',
    accent: '#0078FF',
    red: '#FF0000',
    green: '#18A286',
  },
  fontSizes: {
    xl: '20px',
    l: '16px',
    m: '14px',
    s: '12px',
    xs: '11px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  zIndexes: {
    0: 1,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 1000,
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingType;
    heights: HeightsType;
    colors: ColorsType;
    fontSizes: FontSizesType;
    fontWeights: FontWeightsType;
    zIndexes: ZIndexesType;
  }
}

export default theme;
