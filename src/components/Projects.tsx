import { useState, useRef, useEffect } from 'react'
import { makeStyles } from '../utils/makeStyles'
import FadeIn from '../shared/FadeIn'
import { baseStyle } from '../shared/cardStyle'

const useStyles = makeStyles({
  ...baseStyle,
  card: {
    ...baseStyle.card,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  name: {
    fontWeight: 600,
    color: '#2c2c2c',
    fontSize: '1em',
  },
  externalHint: {
    color: '#c8a882',
    fontSize: '0.9em',
  },
  desc: {
    color: '#5a5a5a',
    fontSize: '0.95em',
    margin: 0,
    lineHeight: 1.6,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  tag: {
    background: '#f0ece6',
    color: '#7a6f65',
    borderRadius: 12,
    padding: '3px 10px',
    fontSize: '0.82em',
  },
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 18,
  },
  filterDropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  filterTrigger: {
    background: '#fff',
    color: '#2c2c2c',
    border: '1.5px solid #e8e0d5',
    borderRadius: 8,
    padding: '6px 14px',
    fontSize: '0.9em',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  filterOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.25)',
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterDialog: {
    background: '#fff',
    border: '1.5px solid #e8e0d5',
    borderRadius: 12,
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    padding: '24px 28px',
    width: 680,
    maxWidth: '92vw',
  },
  filterDialogTitle: {
    fontWeight: 600,
    color: '#2c2c2c',
    fontSize: '0.95em',
    marginBottom: 14,
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))',
    gap: '10px 16px',
  },
  filterMenuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: '0.88em',
    color: '#2c2c2c',
    cursor: 'pointer',
    userSelect: 'none' as const,
  },
  filterDialogFooter: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
  },
  filterDialogBtn: {
    background: '#f0ece6',
    color: '#7a6f65',
    border: 'none',
    borderRadius: 8,
    padding: '6px 16px',
    fontSize: '0.88em',
    cursor: 'pointer',
  },
  filterDialogBtnPrimary: {
    background: '#2c2c2c',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '6px 16px',
    fontSize: '0.88em',
    cursor: 'pointer',
  },
  filterLabel: {
    fontSize: '0.9em',
    color: '#9e9389',
  },
  activeFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 14,
  },
  activeFilterTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: '#f0ece6',
    color: '#7a6f65',
    borderRadius: 12,
    padding: '3px 10px',
    fontSize: '0.82em',
  },
  activeFilterRemove: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: '#9e9389',
    fontSize: '0.95em',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },
})

interface ProjectItem {
  name: string
  description: string
  tags: string[]
  link?: string
}

const projectsData: ProjectItem[] = [
  {
    name: 'Audit Competition Report',
    description: 'A smart contract auditing project focused on logical error detection and risk assessment.',
    tags: ['Solidity', 'Foundry', 'Blockchain'],
    link: "https://github.com/bamboochen92518/Audit-Competition-Report",
  },
  {
    name: 'Credit Card Fraud Detection',
    description: 'A machine learning project for the E.SUN AI Open Competition. Trained and evaluated multiple models including RNN and Random Forest for fraud detection.',
    tags: ['Python', 'RNN', 'Random Forest', 'Machine Learning'],
    link: "https://github.com/bamboochen92518/Credit-Card-Fraud-Detection",
  },
  {
    name: 'Stock Price Predictor',
    description: 'A course project for Applied Deep Learning. Fine-tuned pretrained models including BERT on Chinese financial news for stock price prediction.',
    tags: ['Python', 'LLM', 'NLP', 'Deep Learning', 'Quantitative Finance'],
    link: "https://github.com/bamboochen92518/ADL-FINAL",
  },
  {
    name: 'Free NTU of Bicycles',
    description: 'A computer vision project for object removal in videos. Applied SegFormer for semantic segmentation and VGGT for 3D scene reconstruction, with depth-aware inpainting via DiffuEraser.',
    tags: ['Python', 'Computer Vision', 'Diffusion Models', 'Embodied Vision'],
    link: "https://github.com/bamboochen92518/Free-NTU-of-Bicycles-ver2",
  },
  {
    name: 'Automated Trading Strategy Generator',
    description: 'An AI-agent-based system that automatically generates trading strategies (alpha) by integrating LLMs to retrieve and synthesize research from arXiv. Automated data fetching, backtesting, and strategy code generation.',
    tags: ['Python', 'LLM', 'AI Agent', 'Quantitative Finance'],
    link: "https://github.com/MimiChen1123/GenAI-Hackathon",
  },
  {
    name: 'Multilabel Classification in Medical Images',
    description: 'A research project focusing on multilabel classification for medical images. Designed resampling and grouping methods to address data imbalance.',
    tags: ['Python', 'Computer Vision', 'Multilabel Classification', 'Deep Learning', 'Medical Imaging'],
  },
  {
    name: 'Arbitrage UI',
    description: 'A project for the Solana Rust Bootcamp. Fetches token prices across different Solana protocols and identifies potential arbitrage opportunities.',
    tags: ['TypeScript', 'Vite', 'Blockchain', 'Quantitative Finance'],
    link: 'https://github.com/bamboochen92518/Arbitrage-UI',
  },
]

projectsData.sort((a, b) => a.name.localeCompare(b.name))

const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags))).sort()

export default function Projects() {
  const classes = useStyles()
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleTag(tag: string) {
    setSelectedTags(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  const filtered = selectedTags.size === 0
    ? projectsData
    : projectsData.filter(p => p.tags.some(t => selectedTags.has(t)))

  const triggerLabel = selectedTags.size === 0
    ? 'All'
    : `${selectedTags.size} tag${selectedTags.size > 1 ? 's' : ''} selected`

  return (
    <section id="projects" className={classes.section}>
      <FadeIn as="h2" className={classes.title}>Projects</FadeIn>
      <div className={classes.filterBar}>
        <span className={classes.filterLabel}>Filter by tag:</span>
        <div className={classes.filterDropdown} ref={dropdownRef}>
          <button className={classes.filterTrigger} onClick={() => setOpen(o => !o)}>
            {triggerLabel} ▾
          </button>
          {open && (
            <div className={classes.filterOverlay} onMouseDown={() => setOpen(false)}>
              <div className={classes.filterDialog} onMouseDown={e => e.stopPropagation()}>
                <div className={classes.filterDialogTitle}>Filter by tag</div>
                <div className={classes.filterGrid}>
                  <label className={classes.filterMenuItem}>
                    <input
                      type="checkbox"
                      checked={selectedTags.size === 0}
                      onChange={() => setSelectedTags(new Set())}
                    />
                    All
                  </label>
                  {allTags.map(tag => (
                    <label key={tag} className={classes.filterMenuItem}>
                      <input
                        type="checkbox"
                        checked={selectedTags.has(tag)}
                        onChange={() => toggleTag(tag)}
                      />
                      {tag}
                    </label>
                  ))}
                </div>
                <div className={classes.filterDialogFooter}>
                  <button className={classes.filterDialogBtn} onClick={() => setSelectedTags(new Set())}>Clear</button>
                  <button className={classes.filterDialogBtnPrimary} onClick={() => setOpen(false)}>Done</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedTags.size > 0 && (
        <div className={classes.activeFilters}>
          {Array.from(selectedTags).sort().map(tag => (
            <span key={tag} className={classes.activeFilterTag}>
              {tag}
              <button className={classes.activeFilterRemove} onClick={() => toggleTag(tag)} aria-label={`Remove ${tag}`}>
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
      <div className={classes.grid}>
        {filtered.map((item, i) => (
          <FadeIn
            key={i}
            as={item.link ? 'a' : 'div'}
            className={classes.card}
            {...(item.link ? { href: item.link, target: '_blank', rel: 'noreferrer' } : {})}
          >
            <div className={classes.cardTop}>
              <span className={classes.name}>{item.name}</span>
            </div>
            <p className={classes.desc}>{item.description}</p>
            <div className={classes.tags}>
              {item.tags.map((tag, j) => (
                <span key={j} className={classes.tag}>{tag}</span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
