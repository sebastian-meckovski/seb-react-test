import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import cardPhoto1 from "../src/images/katie-zaferes.png";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card img={cardPhoto1}
            price={"£168"}
            cardName="Life lessons with Katie Zafres"
            rating={"5.5 "}
            country={"usa"}/>
    </div>
  )
}

