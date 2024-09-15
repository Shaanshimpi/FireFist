import './App.css'
import Header from './components/home/Header'
import Quote from './components/home/Quote'
import Why from './components/home/Why'
import WhyMob from './components/home/WhyMob'
function App() {

  return (
    <>
      <Header />
      <Quote />
      <Why />
      <WhyMob/>
      <div style={{height:`100vh`}}>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
