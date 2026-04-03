import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M3.5 0C7.1 0 10.3 1.3 12.5 3.5c1.8 1.8 2.8 4 3 6.5h-5c-.2-1.2-.8-2.3-1.7-3.2C7.4 5.4 5.5 4.5 3.5 4.5 1.5 4.5 0 5.5 0 7.5c0 2.2 1.8 3.2 4 3.8l3 .8c4.5 1.2 7 3.8 7 7.9 0 5.5-4 9-9.5 9C1.5 29 0 28.5 0 28.5V24c0 0 1.5.5 4.5.5 3.2 0 5-1.8 5-4.5 0-2-1.5-3.5-4.2-4.2l-2.8-.8C1 14.5 0 12 0 9.5 0 4 2 0 3.5 0zM22 0c4.5 0 8 1.5 10.5 4.5C35 7.5 36 11.5 36 15.5c0 3.5-1 7-3.5 9.5S26.5 29 22 29H17V0h5zm0 4.5h-1v20h1c3 0 5-1 6.5-3s2.5-4.5 2.5-7-.8-5-2.5-7-3.5-3-6.5-3z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
