const template = ({ imports, interfaces, componentName, props, jsx }, { tpl }) => {
  const component = componentName.replace('Svg', '');
  const name = component[0].toLowerCase() + component.slice(1);

  return tpl`
${imports};
/* c8 ignore start */
import { Icon } from './Icon';
import type { IconProps } from './Icon';

${interfaces};

const ${componentName} = (${props}) => (
  ${jsx}
);

const ForwardRef = forwardRef(${componentName});

const IconWrapped = ({ className, size, ...props }: IconProps) => (
  <Icon name="${name}" className={className} size={size} {...props}>
    <ForwardRef />
  </Icon>
);

export { IconWrapped as ${component} };
/* c8 ignore stop */
`;
};

module.exports = template;
