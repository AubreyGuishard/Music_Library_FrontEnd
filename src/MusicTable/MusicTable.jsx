import MusicRow from "../components/DummyFolder/MusicRow/MusicRow";

const MusicTable = ({songs}) =>  {
    const rows = songs.map((song) => {
       return <MusicRow song={song}/>
    });


    return(<section id = 'music'> 
        <h1>Music Library</h1>
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