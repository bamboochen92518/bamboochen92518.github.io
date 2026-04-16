import { useEffect, useRef, useState, ReactNode, ElementType, ComponentPropsWithRef } from 'react'
import { css } from '@emotion/css'

const duration = 0.5

const classes = {
  hidden: css({
    opacity: 0,
    transform: 'translateY(16px)',
    filter: 'brightness(1.6) saturate(0.2)',
    transition: `opacity ${duration}s ease-in, transform ${duration}s ease-in, filter ${duration}s ease-in`,
  }),
  visible: css({
    opacity: 1,
    transform: 'translateY(0)',
    filter: 'brightness(1) saturate(1)',
    transition: `opacity ${duration}s ease-in, transform ${duration}s ease-in, filter ${duration}s ease-in`,
  }),
}

type FadeInProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithRef<T>, 'as' | 'className' | 'children'>

export default function FadeIn<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: FadeInProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setShow(entry.isIntersecting) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${classes.hidden} ${show ? classes.visible : ''}`}>
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    </div>
  )
}
