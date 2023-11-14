import { vars } from '@launchpad-ui/vars';
import { flatten } from 'flat';
import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles';

const { bg, border, fill, shadow, text, gradient, ...global } = vars.color;

type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

type GlobalKeys = FlattenObjectKeys<typeof global>;
type GradientKeys = FlattenObjectKeys<typeof gradient>;
type BackgroundKeys = FlattenObjectKeys<typeof bg>;
type BorderKeys = FlattenObjectKeys<typeof border>;
type FillKeys = FlattenObjectKeys<typeof fill>;
type TextKeys = FlattenObjectKeys<typeof text>;

const colors = flatten<typeof global, Record<GlobalKeys, string>>(global);
const gradients = flatten<typeof gradient, Record<GradientKeys, string>>(gradient);
const backgrounds = flatten<typeof bg, Record<BackgroundKeys, string>>(bg);
const borders = flatten<typeof border, Record<BorderKeys, string>>(border);
const fills = flatten<typeof fill, Record<FillKeys, string>>(fill);
const texts = flatten<typeof text, Record<TextKeys, string>>(text);

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    mobile: { '@media': '(--mobile)' },
    tablet: { '@media': '(--tablet)' },
    desktop: { '@media': '(--desktop)' },
    wide: { '@media': '(--wide)' },
  },
  defaultCondition: 'default',
  dynamicProperties: {
    // Define pre-determined values, which will be autosuggested
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
    borderWidth: vars.border.width,
    fontFamily: vars.font.family,
    fontSize: vars.font.size,
    fontWeight: vars.font.weight,
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
  shorthands: {},
});

const themedProperties = defineProperties({
  conditions: {
    default: { selector: ':root &, [data-theme="default"] &' },
    dark: { selector: '[data-theme="dark"] &' },
  },
  defaultCondition: 'default',
  dynamicProperties: {
    color: { ...colors, ...texts },
    background: gradients,
    backgroundColor: { ...colors, ...backgrounds },
    borderColor: { ...colors, ...borders },
    fill: { ...colors, ...fills },
    borderStyle: true,
  },
  shorthands: {},
});

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties, themedProperties);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
