import styles from './Block.module.css';

const toCSSValue = (v: number | string) =>
  typeof v === 'string' && Number.isFinite(+v) ? `${v}px` : v;

type BlockProps = {
  text?: string;
  width?: number | string;
  height?: number | string;
};

const Block = ({ text, width = '100%', height = 64 }: BlockProps) => {
  return (
    <svg
      className={styles.container}
      style={{
        width: toCSSValue(width),
        height: toCSSValue(height),
      }}
    >
      <rect className={styles.rect} />
      <rect className={styles.border} />
      {text ? (
        <text className={styles.text} x="50%" y="50%">
          {text}
        </text>
      ) : (
        <>
          <line className={styles.line} x1="0" y1="0" x2="100%" y2="100%" />
          <line className={styles.line} x1="100%" y1="0" x2="0" y2="100%" />
        </>
      )}
    </svg>
  );
};

export { Block };
