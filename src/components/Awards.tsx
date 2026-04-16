import { makeStyles } from '../utils/makeStyles'
import FadeIn from '../shared/FadeIn'
import { baseStyle } from '../shared/cardStyle'

const useStyles = makeStyles({
  ...baseStyle,
  awardTitle: {
    fontWeight: 600,
    color: '#2c2c2c',
    fontSize: '1em',
  },
  desc: {
    color: '#5a5a5a',
    fontSize: '0.95em',
    margin: '8px 0 0',
    lineHeight: 1.6,
  },
})

interface AwardItem {
  title: string
  org: string
  year: string
  description?: string
}

const awardsData: AwardItem[] = [
  {
    title: 'Excellence Award',
    org: '2024 GenAI Stars Hackathon',
    year: '2024',
  },
]

export default function Awards() {
  const classes = useStyles()
  return (
    <section id="awards" className={classes.section}>
      <FadeIn as="h2" className={classes.title}>Awards</FadeIn>
      {awardsData.map((item, i) => (
        <FadeIn key={i} className={classes.card}>
          <div className={classes.cardHeader}>
            <span className={classes.awardTitle}>{item.title}</span>
            <span className={classes.period}>{item.year}</span>
          </div>
          <div className={classes.org}>{item.org}</div>
          {item.description && <p className={classes.desc}>{item.description}</p>}
        </FadeIn>
      ))}
    </section>
  )
}
