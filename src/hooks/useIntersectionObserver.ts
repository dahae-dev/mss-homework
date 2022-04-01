import { RefObject, useEffect } from 'react';

interface UseIntersectionObservserProps {
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  root?: RefObject<HTMLElement>;
  rootMargin?: string;
  threshold?: number; // 0.0 ~ 1.0
  enabled?: boolean;
}

const useIntersectionObservser = ({
  target,
  onIntersect,
  root,
  rootMargin = '100px',
  threshold = 0.0,
  enabled = true,
}: UseIntersectionObservserProps) => {
  console.log(enabled, target.current);
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        return entries.forEach((entry) => (
          entry.isIntersecting && onIntersect()
        ));
      },
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    );

    const targetEl = target && target.current;

    if (!targetEl) {
      return;
    }

    observer.observe(targetEl);

    return () => {
      observer.unobserve(targetEl);
    };
  }, [target.current, enabled]);
};

export default useIntersectionObservser;