import { type MotionNodeOptions } from 'framer-motion';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props extends MotionNodeOptions {
  children: ReactNode;
}

export const viewportSettings = {
  once: true,
  amount: 0.2,
} as const;

export const initialSettings = {
  opacity: 0, y: 50,
  delay: 2,
} as const;

export const whileInViewSettings = {
  opacity: 1, y: 0,
} as const;

export const transitionSettings = {
  duration: 0.2,
} as const;

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
    transition={transition}
    {...props}
  >
    {children}
  </motion.li>
);
