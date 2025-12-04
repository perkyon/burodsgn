interface BuroLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  tagline?: boolean;
}

export default function BuroLogo({ className = '', theme = 'dark', tagline = true }: BuroLogoProps) {
  const color = theme === 'light' ? 'text-white' : 'text-neutral-900';
  const muted = theme === 'light' ? 'text-white/70' : 'text-neutral-600';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span
        className={`font-['Unbounded'] font-black tracking-tight ${color}`}
        style={{ fontSize: 'clamp(4rem, 20vw, 17rem)' }}
      >
        БЮРО
      </span>
      {tagline && (
        <span className={`mt-4 text-sm uppercase tracking-[0.8em] ${muted}`}>
          dsgn
        </span>
      )}
    </div>
  );
}

