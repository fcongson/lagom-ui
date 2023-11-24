// @ts-nocheck

const colors = {
  white: "#ffffff",
  black: "#111111",
  greys: ["#222222", "#545454", "#878787", "#bababa", "#ededed"],
  honeys: ["#dcae1d", "#edcf73", "#f8eecd"],
  olives: ["#626e60", "#94a092", "#cacfc9"],
  navys: ["#394e6f", "#617eae", "#a4b5d0"],
  violets: ["#442c45", "#815483", "#b289b3"],
};
colors.grey = colors.greys[2];
colors.honey = colors.honeys[0];
colors.olive = colors.olives[0];
colors.navy = colors.navys[0];
colors.violet = colors.violets[0];

const fonts = {
  sansSerif: `'Montserrat', sans-serif`,
  serif: `'Domine', serif`,
};

const fontSizes = [12, 14, 16, 20, 24, 36, 54, 81, 121.5];
fontSizes.body = fontSizes[2];

const fontWeights = [400, 600, 700];
fontWeights.body = fontWeights[0];
fontWeights.header = fontWeights[2];
fontWeights.link = fontWeights[1];

const lineHeights = [
  "15px",
  "17px",
  "20px",
  "24px",
  "29px",
  "44px",
  "66px",
  "99px",
  "148px",
];
lineHeights.body = 1.7;

const space = [0, 4, 8, 16, 32, 64, 128];

const buttons = {
  primary: {
    backgroundColor: colors.violet as string,
    color: colors.white as string,
    borderColor: colors.violet as string,
    borderRadius: 8,
    fontFamily: fonts.sansSerif,
    fontWeight: fontWeights.link,
    fontSize: fontSizes.body,
    lineHeight: 2,
  },
  secondary: {
    backgroundColor: colors.white as string,
    color: colors.black as string,
    borderColor: colors.black as string,
    borderRadius: 8,
    fontFamily: fonts.sansSerif,
    fontWeight: fontWeights.link,
    fontSize: fontSizes.body,
    lineHeight: 2,
  },
};

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  buttons,
};
