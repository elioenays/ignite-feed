import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import Avatar from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
        alt=''
      />
      <div className={styles.profile}>
        <Avatar src='https://github.com/elioenays.png' />
        <strong>Eli</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
