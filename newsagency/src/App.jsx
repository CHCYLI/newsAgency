import Navigation from "./Things/Navigation"
import Board from "./Things/Board"
import { useState } from "react"
const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      
      <Navigation setCategory={setCategory}/>
      <Board category={category}/>
    </div>
  )
}

export default App