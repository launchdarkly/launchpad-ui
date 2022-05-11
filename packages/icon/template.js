const template = ({ imports, interfaces, componentName, props, jsx }, { tpl }) => {
  const comp = componentName.replace('Svg', '');
  const name = comp[0].toLowerCase() + comp.slice(1);

  return tpl`
${imports};
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
 
export default IconWrapped;
`;
};

module.exports = template;
