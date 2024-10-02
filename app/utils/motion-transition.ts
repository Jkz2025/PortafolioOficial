import { Variants } from "framer-motion"

export const transitionVariantsPage = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }
}

export const fadeIn = (direction: "right" | "bottom"): Variants => {
    return {
        hidden: {
            x: direction === "right" ? 100 : 0,
            y: direction === "bottom" ? 100 : 0,
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}