import React, { useRef, useEffect, CSSProperties, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

export interface LottieAnimationProps {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
  className?: string;
  onComplete?: () => void;
}

const LottieAnimation = forwardRef(({ animationPath, loop = true, autoplay = true, style, className, onComplete, ...rest }: LottieAnimationProps, ref: React.Ref<HTMLDivElement>) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    import('lottie-web').then((lottie) => {
      if (animationContainer.current) {
        animationInstance.current = (lottie as any).loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop,
          autoplay,
          path: animationPath,
        });

        if (onComplete) {
          animationInstance.current.addEventListener('complete', onComplete);
        }
      }
    });

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        if (onComplete) {
          animationInstance.current.removeEventListener('complete', onComplete);
        }
      }
    };
  }, [animationPath, loop, autoplay, onComplete]);

  return <div ref={animationContainer} className={className} style={style} {...rest} />;
});

LottieAnimation.propTypes = {
  animationPath: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  onComplete: PropTypes.func,
};

export default LottieAnimation;