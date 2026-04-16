export const baseStyle = {
  section: {
    maxWidth: 760,
    margin: '0 auto 48px',
    textAlign: 'left',
  },
  title: {
    fontFamily: "'Lora', serif",
    fontSize: '1.6em',
    color: '#2c2c2c',
    marginBottom: 20,
    paddingBottom: 8,
    borderBottom: '2px solid #e8e0d5',
  },
  card: {
    background: '#fff',
    border: '1px solid #e8e0d5',
    borderRadius: 10,
    padding: '18px 22px',
    marginBottom: 14,
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    '&:hover': {
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      transform: 'translateY(-2px)',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: 4,
  },
  period: {
    color: '#9e9389',
    fontSize: '0.9em',
  },
  org: {
    color: '#7a6f65',
    marginTop: 4,
    fontSize: '0.95em',
  },
} as const