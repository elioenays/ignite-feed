import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/elioenays.png'
          />
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
          👉<a href=''>github.com/elioenays</a>
        </p>
        <p>
          <a href=''>#novo projeto #rocketseat #nodejs #react</a>
        </p>
      </div>
    </article>
  )
}
