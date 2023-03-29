import { useState, useEffect } from "react";
import MusicRow from "../MusicRow/MusicRow";
// import SearchBar from "../components/DummyFolder/MusicRow/SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar"
const MusicTable = ({songs}) =>  {
    const {searchKeyword, setSearchKeyword} = useState('');
    const [filteredSongs, setFilteredSongs] = useState(songs);
    useEffect(() => {
        setFilteredSongs(songs)
    }, [songs]);

    const handleSearch = () => {
        const newFilteredSongs = songs.filter((song) => song.title.toLowerCase().includes(searchKeyword.toLowerCase()),);
        setFilteredSongs(newFilteredSongs);
    };
    const rows = songs.map((song) => {
       return <MusicRow song={song}/>
    });


    return(<section id = 'music'> 
        <h1>Music Library</h1>
        <SearchBar value={searchKeyword} onChange={setSearchKeyword} />
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
               {rows}
            </tbody>
        </table>
    </section>)

}

export default MusicTable