
import './App.css';
import contacts from "./contacts.json"
import { useState } from "react"



function App() {



  let [shownList, setMovieList] = useState(contacts.splice(0, 5))


  //let shownList = []

  // contacts.forEach((elm, idx) => {
  //   if (idx < 5) {
  //     shownList.push(elm)
  //   }
  // })



  const randomActor = () => {




    const random = Math.floor(Math.random() * (contacts.length - shownList.length) + shownList.length)

    let newList = [...shownList]
    newList.push(contacts[random])

    setMovieList(newList)
  }



  return (
    <main className='App'>
      <h1>IRONContacts</h1>
      <button onClick={() => randomActor()}>ADD RANDOM CONTACT</button>
      <table>
        <tr>
          <td><span>PICTURES</span></td>
          <td><span>NAME</span></td>
          <td><span>POPULARITY</span></td>
          <td><span>WON OSCAR</span></td>
          <td><span>WON EMMY</span></td>
        </tr>
        {shownList.map((elm, idx) => {



          return (
            <tr>
              <td><img className="profilePic" src={elm.pictureUrl} alt={elm.name} /></td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              <td>{elm.wonOscar ? "🏆" : "no Oscar yet"}</td>
              <td>{elm.wonEmmy ? "🏆" : "no Emmy yet"}</td>
            </tr>
          )

        })}

      </table>
    </main>
  );
}

export default App;
