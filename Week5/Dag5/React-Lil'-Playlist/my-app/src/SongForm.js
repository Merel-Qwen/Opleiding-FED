import React from "react";

class SongForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.songItems);
    this.props.HandleSubmit(this.state);
  };
  // todo: object meegeven met title/ artist/genre / rating
  // welk van de velden is geupdate? alleen updaten dat is aangepast.
  handleChange(event) {
    const newSong = {};
    newSong[event.target.name] = event.target.value;
    console.log(newSong);
    this.setState(newSong);
  }

  render() {
    return (
      <form className="song-input" onSubmit={this.onSubmit}>
        <input
          placeholder="Song"
          name="title"
          type="search"
          className="input-primary"
          onChange={this.handleChange}
        ></input>
        <input
          placeholder="Artist"
          name="artist"
          type="search"
          className="input-primary"
          onChange={this.handleChange}
        ></input>
        <select
          className="input-primary"
          name="genre"
          onChange={this.handleChange.bind(this)}
        >
          <option value=""> Choose Genre </option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
        </select>

        <select
          className="input-primary"
          name="rating"
          onChange={this.handleChange}
        >
          <option value=""> Rating </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="button-primary" type="submit">
          Add
        </button>
      </form>
    );
  }
  // value={this.state.input}
}

export default SongForm;

// import React from "react";

// SongForm;
// class SongForm extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <h1>SongForm</h1>
//       </div>
//     );
//   }
//   /* <SongList songs={this.state.songs} />
// <SongList songs={this.state.songs} /> */
// }

// export default SongForm;
