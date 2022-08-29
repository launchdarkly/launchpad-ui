enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

enum IconButtonSize {
  SMALL = 'small',
  NORMAL = 'normal',
}

enum EllipsisButtonType {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  HAMBURGER = 'hamburger',
  DOWN = 'down',
  CHART = 'chart',
}

enum ButtonKind {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DESTRUCTIVE = 'destructive',
  MINIMAL = 'minimal',
  LINK = 'link',
}

enum ButtonSize {
  TINY = 'tiny',
  SMALL = 'small',
  NORMAL = 'normal',
  BIG = 'big',
}

enum ButtonGroupSpacing {
  COMPACT = 'compact',
  NORMAL = 'normal',
  LARGE = 'large',
}

type AsButton<T extends object> = T &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type AsLink<T extends object> = T &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

type PolymorphicButtonProps<BaseProps extends object> = AsButton<BaseProps> | AsLink<BaseProps>;

export {
  ButtonType,
  EllipsisButtonType,
  ButtonKind,
  ButtonSize,
  IconButtonSize,
  ButtonGroupSpacing,
  PolymorphicButtonProps,
};
