import { delay, type MotionNodeOptions } from 'framer-motion';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export const viewportSettings = {
  // once: true,
  amount: 0.2,
  // amount: 0.5,
} as const;

export const viewportContainerSettings = {
  once: true,
  // delay: 3,
  amount: 0
} as const;

export const initialSettings = {
  opacity: 0, y: 50,
  delay: 2,

} as const;

export const whileInViewSettings = {
  opacity: 1, y: 0,
  delay: 1,
} as const;

export const transitionSettings = {
  duration: 0.2,
  delay: 0.5,
} as const;

export const transitionContainerSettings = {
  duration: 0.2,
} as const;

interface Props extends MotionNodeOptions {
  children: ReactNode;
}

export const AnimatedLi = ({
  children,
  initial = initialSettings,
  whileInView = whileInViewSettings,
  viewport = viewportSettings,
  transition = transitionSettings,
  ...props
}: Props, ) => (
  <motion.li
    initial={initial}
    whileInView={whileInView}
    viewport={viewport}
    {...props}
    transition={transition}
  >
    {children}
  </motion.li>
); 

export const AnimatedContainer = ({
  children,
  initial = initialSettings,
  whileInView = whileInViewSettings,
  viewport = viewportContainerSettings,
  transition = transitionContainerSettings,
  ...props
}: Props, ) => (
  <motion.li
  initial={initial}
  whileInView={whileInView}
  viewport={viewport}
  {...props}
  transition={transition}
  >
    {children}
  </motion.li>
);
