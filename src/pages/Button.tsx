import React, { useState } from "react";
import { motion } from "framer-motion";

const Button: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.button
            key="button"
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            whileHover={{
                opacity: 1,
                scale: 1,
            }}
            onClick={handleClick}
        >
            <span>Animate</span>
        </motion.button>
    );
};

export default Button;