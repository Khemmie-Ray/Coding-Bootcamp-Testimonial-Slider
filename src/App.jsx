import './index.css'
import Slide from './components/Slide'
import curve from './assets/pattern-curve.svg'

function App() {
  return (
    <div className='container'>
      <Slide />
        <img src={curve} alt="" className='curve-Bg' />
        <footer>
        <div class="attribution">
         Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
         Coded by <a href="#">Khemmie-Ray</a>.
  </div>
        </footer>
    </div>
  )
}

export default App