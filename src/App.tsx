import { shallow } from 'zustand/shallow';
import './App.css';
import { useCounter } from './store/useCount';


function App() {

  const { count, posts } = useCounter((state) => ({
    count: state.count,
    posts: state.posts
  }), shallow)

  const { increaseByValue, decrementByValue, getPosts } = useCounter()

  const { increment, decrement } = useCounter(state => ({
    increment: state.increaseCount,
    decrement: state.decrementCount
  }))

  getPosts()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => decrementByValue(10)}> -10</button>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
      <button onClick={() => increaseByValue(10)}>+10</button>
      <div>{posts.map((post, i) => (
        <div key={i}>{post.title} - {post.id}</div>
      ))}</div>
    </div>
  )
}

export default App
