import { makeStyles } from '../utils/makeStyles'

const useStyles = makeStyles({
  footer: {
    background: '#f0ece6',
    color: '#9e9389',
    padding: 15,
    fontSize: '0.85em',
    borderTop: '1px solid #e8e0d5',
    textAlign: 'center',
  },
})

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <p>© 2025 Chuhsin Chen | Built with GitHub Pages</p>
    </footer>
  )
}
