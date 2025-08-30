import { delay, type MotionNodeOptions } from 'framer-motion';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props extends MotionNodeOptions {
  children: ReactNode;
}

export const viewportContainerSettings = {
  once: true,
  amount: 0
} as const;

export const initialContainerSettings = {
  opacity: 0, x: -50,
  delay: 2,
} as const;

export const whileInViewContainerSettings = {
  opacity: 1, x: 0,
} as const;


export const transitionContainerSettings = {
  duration: 0.2,
} as const;

export const AnimatedContainer = ({
  children,
  initial = initialContainerSettings,
  whileInView = whileInViewContainerSettings,
  viewport = viewportContainerSettings,
  transition = transitionContainerSettings,
  ...props
}: Props, ) => (
  <motion.li
    initial={initial}
    whileInView={whileInView}
    viewport={viewport}
    transition={transition}
    {...props}
  >
    {children}
  </motion.li>
);
