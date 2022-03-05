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

// export default function App() {
//   return (
//     <div style={{"border":"2px black solid", 
//                  "height": "50vh", 
//                  "width": "50vh", 
//                  "margin": "5vh"}}>
//       <img alt='hello' src={cardPhoto1} style={{"width": "50px", 
//                                                 "margin": "1px auto", 
//                                                 "marginLeft": "auto", 
//                                                 "marginRight": "auto",
//                                                 "display": "block"}}/>
//       <div style={{"border": "2px black solid",
//                    "height": "10vh", 
//                    "width": "10vh", 
//                    "margin": "1px auto"}}>

//       </div>
//       <p style={{"textAlign": "center"}} >This needs to be centered</p>
//     </div>
//   )
// }
