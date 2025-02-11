
import './App.css'
import "tailwindcss";
import Card from './Components/Card'

function App() {
//  let myObj = {
//   username: "Saurabh",
//   age: 21,
//  }
//  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind CSS Test</h1>
      <Card userName="Nishant" position="Software Developer" />
      <Card userName="Saurabh" position="Software Engineer 2"/>
      <Card userName="Mitesh" position="Cloud Developer"/>
    </>
  )
}

export default App
