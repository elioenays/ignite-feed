import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/elioenays.png'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eli</strong>
              <time
                title='28 de Março as 10:51'
                dateTime='2023-03-03 10:50:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
