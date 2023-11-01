import { vars } from '@launchpad-ui/vars';
import { flatten } from 'flat';
import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles';

const { bg, border, fill, shadow, text, ...global } = vars.color;

type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

type FlatKeys = FlattenObjectKeys<typeof global>;

const colors = flatten<typeof global, Record<FlatKeys, string>>(global);

const responsiveProperties = defineProperties({
  dynamicProperties: {
    // Define pre-determined values, which will be autosuggested
    color: colors,
    backgroundColor: colors,
    gap: vars.spacing,
    padding: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    top: vars.spacing,
    left: vars.spacing,
    right: vars.spacing,
    bottom: vars.spacing,
    margin: vars.spacing,
    marginTop: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginBottom: vars.spacing,
    borderRadius: vars.border.radius,
    fontFamily: vars.font.family,
    fontSize: vars.font.size,
    lineHeight: vars['line-height'],
    zIndex: vars['z-index'],
    width: vars.size,
    height: vars.size,
    // Will work with any CSS value
    display: true,
    textAlign: true,
    flexDirection: true,
    justifyContent: true,
    alignItems: true,
    position: true,
    verticalAlign: true,
  },
  staticProperties: {
    // Build out utility classes that don't use CSS variables
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
  },
  shorthands: {
    bg: ['backgroundColor'],
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
