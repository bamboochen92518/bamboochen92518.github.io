import { makeStyles } from '../utils/makeStyles'
import FadeIn from '../shared/FadeIn'
import { baseStyle } from '../shared/cardStyle'

const useStyles = makeStyles({
  ...baseStyle,
  role: {
    fontWeight: 600,
    color: '#2c2c2c',
    fontSize: '1em',
  },
  bullets: {
    margin: '10px 0 0 18px',
    padding: 0,
    color: '#5a5a5a',
    fontSize: '0.95em',
    lineHeight: 1.7,
  },
})

interface ExperienceItem {
  role: string
  org: string
  period: string
  bullets: string[]
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Research and Development Intern',
    org: 'Microsoft',
    period: '2025.09 – Present',
    bullets: [
      'Developed unit and end-to-end tests to ensure the reliability and quality of the Azure Maps platform.',
      'Designed and implemented an onboarding experience for Azure Maps to improve new user adoption.',
      'Delivered TypeScript-based feature implementations as part of the Azure Maps engineering team.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'National Taiwan University',
    period: '2024.07 – 2026.02',
    bullets: [
      'Developed an encoder-based automated essay scoring model with features extracted from a decoder-based LLM.',
      'Built a spoken language assessment system leveraging AI-based scoring and feedback generation.',
      'Implemented an English language learning platform with AI-driven question generation tools using Python and JavaScript.',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'National Taiwan University',
    period: '2024.02 – 2025.01',
    bullets: [
      'Assisted students in solving problems related to machine learning, data structures, and algorithms.',
      'Designed the programming component of course homework assignments.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Copower Engineering Consultants Inc.',
    period: '2022.06 – 2022.08',
    bullets: [
      'Developed a checking program and an automatic drawing generation program for reinforcement drawings.',
      'Built and deployed a web-based platform for reinforcement drawing verification.',
    ],
  },
]

export default function Experience() {
  const classes = useStyles()
  return (
    <section id="experience" className={classes.section}>
      <FadeIn as="h2" className={classes.title}>Work Experience</FadeIn>
      {experienceData.map((item, i) => (
        <FadeIn key={i} className={classes.card}>
          <div className={classes.cardHeader}>
            <span className={classes.role}>{item.role}</span>
            <span className={classes.period}>{item.period}</span>
          </div>
          <div className={classes.org}>{item.org}</div>
          <ul className={classes.bullets}>
            {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </FadeIn>
      ))}
    </section>
  )
}
