import Counter from './Counter'
import './styles.css'

export const App = () => {
  const name = 'kkvanonymous'
  return (
    <>
      <h1>Hey, React Webpack Starter Template- {process.env.NODE_ENV}</h1>
      <h2>By - {name}</h2>
      <Counter />
    </>
  )
}
