import { animated, useTransition } from '@react-spring/web';
import { forwardRef, Ref } from 'react';

import { Modal, ModalProps } from './Modal';
import './styles/Modal.css';

const springConfig = { tension: 180, friction: 12, bounce: 0 };

const presets = {
  pop: {
    from: { opacity: 0, transform: 'scale(0.9)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)' },
  },
  slideRight: {
    from: { opacity: 0, transform: 'translate3d(10%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d( 0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(10%, 0, 0)' },
  },
};

type ModalTransitionProps = {
  transition: 'pop' | 'slideRight';
  runOnMount?: boolean;
  ref?: Ref<Modal>;
} & ModalProps;

const AnimatedModal = animated(Modal);

const ModalTransitionComponent = ({
  transition,
  runOnMount,
  children,
  ...props
}: ModalTransitionProps) => {
  const transitions = useTransition(true, {
    ...presets[transition],
    config: springConfig,
  });

  return transitions(
    ({ transform, opacity }, show) =>
      show && (
        <AnimatedModal {...props} overlayStyle={{ opacity }} contentStyle={{ transform }}>
          {children}
        </AnimatedModal>
      )
  );
};

const ModalTransition = forwardRef<Modal, ModalTransitionProps>((props, ref) => (
  <ModalTransitionComponent {...props} ref={ref} />
));

ModalTransition.displayName = 'ModalTransition';

export { ModalTransition };
export type { ModalTransitionProps };
