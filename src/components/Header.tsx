import { makeStyles, keyframes } from '../utils/makeStyles'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

const useStyles = makeStyles({
  header: {
    background: '#ffffff',
    padding: '30px 20px 20px',
    borderBottom: '2px solid #e8e0d5',
    textAlign: 'center',
    animation: `${fadeIn} 0.8s ease-in`,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #c8a882',
    marginBottom: 12,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    fontFamily: "'Lora', serif",
    fontSize: '2.2em',
    margin: '0 0 6px',
    color: '#2c2c2c',
  },
  tagline: {
    fontSize: '1em',
    margin: '6px 0 16px',
    color: '#7a6f65',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '8px 18px',
  },
  navLink: {
    color: '#7a6f65',
    textDecoration: 'none',
    fontSize: '1em',
    transition: 'color 0.2s',
    '&:hover': { color: '#c8a882' },
  },
  cvLink: {
    color: '#ffffff',
    background: '#c8a882',
    padding: '5px 14px',
    borderRadius: 20,
    fontSize: '0.95em',
    textDecoration: 'none',
    transition: 'background 0.2s',
    '&:hover': {
      background: '#b08f6a',
      color: '#ffffff',
    },
  },
})

export default function Header() {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <img src="/bamboo_1471394.png" alt="Chuhsin Chen Avatar" className={classes.avatar} />
      <h1 className={classes.name}>Chuhsin Chen (Bamboo)</h1>
      <p className={classes.tagline}>NTU CSIE | Crypto &amp; Blockchain Research | Machine Learning Research</p>
      <nav className={classes.nav}>
        <a href="#education" className={classes.navLink}>Education</a>
        <a href="#experience" className={classes.navLink}>Experience</a>
        <a href="#projects" className={classes.navLink}>Projects</a>
        <a href="#awards" className={classes.navLink}>Awards</a>
        <a href="#contact" className={classes.navLink}>Contact</a>
        <a href="/CV.pdf" download className={classes.cvLink}>Download CV</a>
      </nav>
    </header>
  )
}
