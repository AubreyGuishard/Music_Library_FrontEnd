import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import MusicTable from "./MusicTable/MusicTable";

const DUMMY_DATA = [
    {
        "id": 1,
        "title": "Doo Wop (That Thing)",
        "artist": "Lauryn Hill",
        "album": "The Miseducation of Lauryn Hill",
        "release_date": "1998-08-25",
        "genre": "Neo Soul"
    },
    {
        "id": 2,
        "title": "Cranes in the Sky",
        "artist": "Solange",
        "album": "A Seat at the Table",
        "release_date": "2016-09-30",
        "genre": "Neo Soul"
    },
    {
        "id": 3,
        "title": "Amber",
        "artist": "Steve Lacy",
        "album": "Gemini Rights",
        "release_date": "2022-07-15",
        "genre": "Funk"
    },
    {
        "id": 4,
        "title": "Everybody Wants To Rule The World",
        "artist": "Tears For Fears",
        "album": "Songs From The Big Chair",
        "release_date": "1985-02-17",
        "genre": "Pop Music"
    },
    {
        "id": 5,
        "title": "Bitter Sweet Symphony",
        "artist": "The Verve",
        "album": "Urban Hymns",
        "release_date": "1997-09-29",
        "genre": "Indie Rock"
    }    
];

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
        
        {/* <button onClick={fetchMusic}>FETCH THE TUNES</button> */}
        <MusicTable songs={songs}/>
        
    </div>
  )
}
export default App;
