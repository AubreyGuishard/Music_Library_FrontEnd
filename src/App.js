import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import MusicTable from "./components/MusicTable/MusicTable";
import NavigationBar from "./components/NavigationBar/NavigationBar";



function App() {

    const [songs, setSongs] = useState([])
   async function fetchMusic(){
        const response = await axios.get('http://127.0.0.1:8000/api/music/')
        setSongs(response.data)
    }
    useEffect(() => {
      fetchMusic();
    }, []);

    console.log('songs list: ', songs)

    
  return (
    <div id='app'>
        <NavigationBar/>
        {/* <button onClick={fetchMusic}>FETCH THE TUNES</button> */}
        <AddSongForm/>
        <MusicTable songs={songs}/>
        
    </div>
  )
}
export default App;
