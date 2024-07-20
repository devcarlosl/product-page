interface StylesProps {
  readonly [key: string]: string;
}

export const checkDirectionImageClass = (
  direction: string,
  styles: StylesProps
) =>
  ({
    Right: styles.row,
    Left: styles.rowReverse,
  }[direction] || styles.column);
