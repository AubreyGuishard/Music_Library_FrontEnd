import React, { useState } from "react";
import axios from "axios";

const AddSongForm = ({fetchMusic}) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addSong()

 const addSong = async () => {
     const formData = {
       title,
       artist,
       album,
       release_date,
       genre,
     };
     
     const response = await axios.post("http://127.0.0.1:8000/api/music/", formData);
     if (response.status === 201){
         fetchMusic()
        }
    };
}   

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </div>
      <div>
        <label>Album</label>
        <input
          type="text"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
      </div>
      <div>
        <label>Release Date</label>
        <input
          type="date"
          value={release_date}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
