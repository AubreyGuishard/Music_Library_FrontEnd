import axios from "axios"
import React from 'react';


const MusicRow = ({song}) => {
    const handleDelete = async () => {
        const url = `http://127.0.0.1:8000/api/music/${song.id}/`
        const response = await axios.delete(url, song)
    }

return  <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <td>
                <button onClick={handleDelete}>Delete Song</button>
            </td>
            <td>
                <button>Edit Song</button>
            </td>
        </tr>;
}

export default MusicRow;