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
    inset: vars.spacing,
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
    width: vars.size,
    height: vars.size,
    maxHeight: vars.size,
    maxWidth: vars.size,
    minHeight: vars.size,
    minWidth: vars.size,
    // Will work with any CSS value
    display: true,
    textAlign: true,
    flex: true,
    flexBasis: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    justifyContent: true,
    justifySelf: true,
    alignItems: true,
    alignSelf: true,
    position: true,
    verticalAlign: true,
    overflow: true,
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
    boxShadow: true,
  },
  shorthands: {},
});

const unconditionalProperties = defineProperties({
  dynamicProperties: {
    cursor: true,
    opacity: true,
    textTransform: true,
    transitionProperty: true,
    transitionDelay: true,
    transitionDuration: vars.duration,
    transitionTimingFunction: true,
    visibility: true,
    whiteSpace: true,
    wordBreak: true,
    wordWrap: true,
    zIndex: vars['z-index'],
  },
  shorthands: {},
});

export const rainbowSprinkles = createRainbowSprinkles(
  responsiveProperties,
  themedProperties,
  unconditionalProperties
);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
