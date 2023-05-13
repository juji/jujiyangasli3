import { ReactNode } from 'react'
import styles from './toggle.module.scss'
import Link from 'next/link'

export default function Toggle({ label, toggled, href }:{
  label: ReactNode
  toggled: boolean
  href: string
  // onClick: (toggled: boolean) => void
}){

    return (
      <label className={styles.toggleLabel}>
        <Link href={href} className='noline'>
          <input type="checkbox" checked={toggled} readOnly={true} />
          <span />
          <strong>{label}</strong>
        </Link>
      </label>
    )
}