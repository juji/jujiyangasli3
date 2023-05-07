import { ReactNode } from 'react'
import styles from './toggle.module.scss'

export default function Toggle({ label, toggled, onClick }:{
  label: ReactNode
  toggled: boolean
  onClick: (toggled: boolean) => void
}){

    const callback = () => {
      onClick(!toggled)
    }

    return (
        <label className={styles.toggleLabel}>
            <input type="checkbox" defaultChecked={toggled} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
    )
}