import { create } from 'zustand'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface CountProps {
  title: string
  count: number
  posts: Post[]
  getPosts: () => Promise<void>
  decrementByValue: (value: number) => void
  increaseByValue: (value: number) => void
  increaseCount: () => void
  decrementCount: () => void
}

export const useCounter = create<CountProps>((set) => ({
  title: 'Testando Zustand',
  count: 0,
  decrementByValue: (value) => set(state => ({ count: state.count - value })),
  increaseByValue: (value) => set(state => ({ count: state.count + value })),
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  decrementCount: () => set(state => ({ count: state.count - 1 })),

  posts: [],
  getPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    set(state => ({
      ...state,
      posts
    }))
  }
}))
