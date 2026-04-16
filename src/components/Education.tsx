import { makeStyles } from '../utils/makeStyles'
import FadeIn from '../shared/FadeIn'
import { baseStyle } from '../shared/cardStyle'

const useStyles = makeStyles({
  ...baseStyle,
  card: {
    ...baseStyle.card,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 52,
    height: 52,
    objectFit: 'contain',
    flexShrink: 0,
  },
  cardBody: {
    flex: 1,
    minWidth: 0,
  },
  degree: {
    fontWeight: 600,
    color: '#2c2c2c',
    fontSize: '1em',
  },
  school: {
    color: '#7a6f65',
    marginTop: 4,
    fontSize: '0.95em',
  },
  meta: {
    color: '#9e9389',
    marginTop: 4,
    fontSize: '0.88em',
  },
})

interface EducationItem {
  school: string
  degree: string
  period: string
  icon?: string
  gpa?: string
  rank?: string
}

const educationData: EducationItem[] = [
  {
    school: 'National Taiwan University',
    degree: 'M.Sc. in Computer Science and Information Engineering',
    period: '2025.09 – Present',
    icon: 'https://upload.wikimedia.org/wikipedia/zh/thumb/4/4c/National_Taiwan_University_logo.svg/1280px-National_Taiwan_University_logo.svg.png',
  },
  {
    school: 'National Taiwan University',
    degree: 'B.Sc. in Computer Science and Information Engineering',
    period: '2021.09 – 2025.06',
    icon: 'https://upload.wikimedia.org/wikipedia/zh/thumb/4/4c/National_Taiwan_University_logo.svg/1280px-National_Taiwan_University_logo.svg.png',
    gpa: '4.01',
    rank: '47/123',
  },
]

export default function Education() {
  const classes = useStyles()
  return (
    <section id="education" className={classes.section}>
      <FadeIn as="h2" className={classes.title}>Education</FadeIn>
      {educationData.map((item, i) => (
        <FadeIn key={i} className={classes.card}>
          {item.icon && <img src={item.icon} alt={item.school} className={classes.icon} />}
          <div className={classes.cardBody}>
            <div className={classes.cardHeader}>
              <span className={classes.degree}>{item.degree}</span>
              <span className={classes.period}>{item.period}</span>
            </div>
            <div className={classes.school}>{item.school}</div>
            {(item.gpa || item.rank) && (
              <div className={classes.meta}>
                {item.gpa && <>GPA: {item.gpa}</>}
                {item.gpa && item.rank && <> &nbsp;·&nbsp; </>}
                {item.rank && <>Rank: {item.rank}</>}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </section>
  )
}
