import { Header } from './components/Header'

import './global.css'

import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/elioenays.png',
      name: 'Elioenay Silva',
      role: 'Desenvolvedor Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio.',
      },
      {
        type: 'link',
        content: 'https://github.com/elioenays.png',
      },
    ],
    publishedAt: new Date('2023-07-22 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/elioenays.png',
      name: 'Elioenay Silva',
      role: 'Desenvolvedor Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio.',
      },
      {
        type: 'link',
        content: 'https://github.com/elioenays.png',
      },
    ],
    publishedAt: new Date('2023-07-22 10:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
