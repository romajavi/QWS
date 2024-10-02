import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

const PageAnimation = (WrappedComponent) => {
    return (props) => (
        <motion.div
            style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <WrappedComponent {...props} />
        </motion.div>
    );
};

export default PageAnimation;