import { css, keyframes } from '@emotion/css'

type StyleInput = Parameters<typeof css>[0]

export function makeStyles<K extends string>(
  stylesDef: Record<K, StyleInput>
): () => Record<K, string> {
  const classes = {} as Record<K, string>
  for (const key in stylesDef) {
    classes[key] = css(stylesDef[key])
  }
  return function useStyles(): Record<K, string> {
    return classes
  }
}

export { keyframes } from '@emotion/css'
