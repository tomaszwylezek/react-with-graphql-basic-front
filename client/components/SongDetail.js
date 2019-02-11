import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: ({ params: { id } }) => ({
    variables: {
      id
    }
  })
})(SongDetail);
