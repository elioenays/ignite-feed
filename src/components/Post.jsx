import Avatar from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/elioenays.png' />
          <div className={styles.authorInfo}>
            <strong>Eli</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time
          title='28 de Março as 10:51'
          dateTime='2023-03-03 10:50:00'
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio.</p>
        <p>
          👉 <a href=''>github.com/elioenays</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a> <a href=''>#rocketseat</a>{' '}
          <a href=''>#nodejs</a> <a href=''>#react</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
