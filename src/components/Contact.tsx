import { makeStyles } from '../utils/makeStyles'

const useStyles = makeStyles({
  section: {
    maxWidth: 760,
    margin: '0 auto 48px',
    textAlign: 'center',
  },
  title: {
    fontFamily: "'Lora', serif",
    fontSize: '1.6em',
    color: '#2c2c2c',
    marginBottom: 20,
    paddingBottom: 8,
    borderBottom: '2px solid #e8e0d5',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 14,
  },
  link: {
    color: '#5a5a5a',
    textDecoration: 'none',
    fontSize: '1em',
    padding: '9px 22px',
    border: '1.5px solid #c8a882',
    borderRadius: 24,
    background: '#fff',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: '#c8a882',
      color: '#fff',
    },
  },
})

const links = [
  { label: 'GitHub', href: 'https://github.com/bamboochen92518' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chu-hsin-chen-1194412a0/' },
  { label: 'Twitter', href: 'https://x.com/bamboochen92518' },
]

export default function Contact() {
  const classes = useStyles()
  return (
    <section id="contact" className={classes.section}>
      <h2 className={classes.title}>Contact Me</h2>
      <div className={classes.links}>
        {links.map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noreferrer" className={classes.link}>
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}
