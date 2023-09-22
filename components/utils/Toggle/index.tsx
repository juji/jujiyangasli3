import { ReactNode } from 'react'
import styles from './toggle.module.scss'
import Link from 'next/link'

// import type { MouseEvent } from 'react'

export default function Toggle({ label, onClick, toggled, href }:{
  label: ReactNode
  toggled: boolean
  href: string
  onClick: (e:any) => void
}){

    return (
      <label className={styles.toggleLabel}>
        <Link onClick={onClick} href={href} className='noline'>
          <input type="checkbox" checked={toggled} readOnly={true} />
          <span />
          <strong>{label}</strong>
        </Link>
      </label>
    )
}