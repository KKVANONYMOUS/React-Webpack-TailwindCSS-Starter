import Counter from './Counter'
import './styles.css'

export const App = () =>{
    return <>
    <h1>Hey, React Webpack Starter Template- {process.env.NODE_ENV}</h1>
    <Counter />
    </>
}