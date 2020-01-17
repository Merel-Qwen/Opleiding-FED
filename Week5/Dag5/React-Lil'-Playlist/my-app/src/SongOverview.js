import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songItems: [
        {
          id: 1,
          title: "Anton aus Tirol",
          artist: "Bob Ziroll",
          genre: "pop",
          rating: 5
        }
      ]
    };
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  HandleSubmit(song) {
    const id = this.state.songItems.length + 1;
    const newSong = {
      id: id,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating
    };
    console.log(newSong);

    this.addSong(newSong);
  }

  addSong = newSong => {
    this.setState({
      songItems: [...this.state.songItems, newSong]
    });
  };

  render() {
    return (
      <div>
        <h1>Merel's Lil'playlist</h1>
        <SongForm HandleSubmit={this.HandleSubmit} />
        <table>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList songItems={this.state.songItems} />
      </div>
    );
  }
}

export default SongOverview;
