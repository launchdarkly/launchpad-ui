import cx from 'clsx';

const AlertHeading = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  const classes = cx('Alert-heading', className);

  return (
    <h4 className={classes} {...rest}>
      {children}
    </h4>
  );
};
export { AlertHeading };
