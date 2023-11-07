import React, { CSSProperties } from 'react';
export interface LottieAnimationProps {
    animationPath: string;
    loop?: boolean;
    autoplay?: boolean;
    style?: CSSProperties;
    className?: string;
    onComplete?: () => void;
}
declare const LottieAnimation: React.ForwardRefExoticComponent<LottieAnimationProps & React.RefAttributes<HTMLDivElement>>;
export default LottieAnimation;
