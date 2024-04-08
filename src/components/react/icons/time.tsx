interface PropsIcons {
  className?: string;
  size?: string;
  type: 'add' | 'close';
}

export const time = ({ className, size, type }: PropsIcons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size ?? '24px'} height={size ?? '24px'} className={className} viewBox='0 0 24 24'>
      {type === 'add' ? (
        <>
          <path
            fill='currentColor'
            d='M10.75 8c-.41 0-.75.34-.75.75v4.69c0 .35.18.67.47.85l3.64 2.24a.713.713 0 1 0 .74-1.22L11.5 13.3V8.75c0-.41-.34-.75-.75-.75'
          />
          <path
            fill='currentColor'
            d='M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23c-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10z'
          />
          <path
            fill='currentColor'
            d='M22 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1'
          />
        </>
      ) : (
        <path
          fill='currentColor'
          d='M13.08 19.91c.1.69.32 1.34.63 1.92c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.963 8.963 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7c.37 0 .72-.04 1.08-.09M11 14h2V8h-2zm4-13H9v2h6zm7.54 15.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z'
        />
      )}
    </svg>
  );
};

<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'></svg>;
