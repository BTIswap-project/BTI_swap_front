import { motion } from 'framer-motion';

export default function DefaultAnimation({
    children,
  }: {
    children: React.ReactNode;
  }) {


  return (
    <motion.div
        initial={{ opacity: 0 }} // Initial state: invisible
        animate={{ opacity: 1 }} // Animate to this state: fully visible
        exit={{ opacity: 0 }} // Exit state: invisible
        transition={{ duration: 0.5, delay: 0.2 }} // Duration of the animation
    >
    {children}
    </motion.div>
  );
}
