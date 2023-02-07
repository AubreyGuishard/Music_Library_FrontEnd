const MusicRow = ({song}) => {
return  <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <td>
                <button>Delete Song</button>
            </td>
            <td>
                <button>Edit Song</button>
            </td>
        </tr>;
}

export default MusicRow;