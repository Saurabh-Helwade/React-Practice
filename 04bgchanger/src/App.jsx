import {useState} from "react"


function App() {
  const [color,setColor] = useState("yellow")

  return (
    <div className="w-full h-screen duration-200"
    style= {{backgroundColor : color}}>
     
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 rounded-lg">
        
        <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-lg">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}>Red</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "green"}}>Green</button>
          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "purple"}}>Pruple</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "orange"}}>Orange</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "pink"}}>Pink</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "olive"}}>Olive</button>
          <button 
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "lavender"}}>Lavender</button>
          <button 
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "violet"}}>Violet</button>
        </div>
        </div>
    </div>
  )
}

export default App
