import { makeStyles, keyframes } from '../utils/makeStyles'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const useStyles = makeStyles({
  overlay: {
    position: 'fixed',
    inset: 0,
    background: '#faf9f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  overlayHiding: {
    animation: `${fadeOut} 0.3s ease forwards`,
    pointerEvents: 'none',
  },
  spinner: {
    width: 32,
    height: 32,
    border: '3px solid #e8e0d5',
    borderTopColor: '#c8a882',
    borderRadius: '50%',
    animation: `${spin} 0.8s linear infinite`,
  },
})

interface LoadingProps {
  hiding: boolean
}

export default function Loading({ hiding }: LoadingProps) {
  const classes = useStyles()
  return (
    <div className={`${classes.overlay} ${hiding ? classes.overlayHiding : ''}`}>
      <div className={classes.spinner} />
    </div>
  )
}
