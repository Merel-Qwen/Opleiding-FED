import React from "react";

// import SongForm from "./SongForm";

class SongList extends React.Component {
  constructor() {
    super();
    this.state = {
      songItems: [{ title: "", artist: "", genre: "", rating: "" }]
    };
  }

  render() {
    return (
      <table>
        {this.props.songItems.map(song => (
          <tr key={song.id}>
            <th>{song.title}</th>
            <th>{song.artist}</th>
            <th>{song.genre}</th>
            <th>{song.rating}</th>
          </tr>
        ))}
      </table>
    );
  }
  /* <SongList songs={this.state.songs} />
<SongList songs={this.state.songs} /> */
}

export default SongList;
