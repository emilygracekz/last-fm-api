import React, { useState } from "react";
import styled from "styled-components";
import RelatedArtistCard from "./relatedArtistCard";

const Result = ({ artist }) => {
  if (!artist) {
    return null;
  }
  return (
    <Container>
        <h1>{artist.name}</h1>
        <img className='artistImage' src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" alt='star'></img>
      <h2>Similar artists</h2>
      <GridWrapper>
        {artist.similar.artist.map(function (artist, index) {
          return <RelatedArtistCard key={index} {...artist} />;
        })}
      </GridWrapper>
    </Container>
  );
};

const SearchBar = () => {
  const [artist, setArtist] = useState("");
  const [data, setData] = useState();

   function onSearch() {
    const lastfm = new window.LastFM({
      apiKey: "27875ab3dbb726cf1e97c67c0e526255",
      apiSecret: "4f58f2cdceb590134ea268fdcfefd165",
    });
    lastfm.artist.getInfo(
      { artist: artist },
      {
        success: function (data) {
          setData(data);
        },
        error: function () {
          return;
        },
      }
    );
     setArtist("");
  }

  return (
    <Container>
      <h2>Search Last FM for an artist:</h2>
      <Row>
        <input
          type="text"
          className="searchBar"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <button onClick={onSearch}>SEARCH</button>
      </Row>
      {data && <Result {...data} />}
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  a {
   color: #e9765b;
  }

  h1 {
    font-size: 40px;
    color: black;
    font-family: "Rubik", sans-serif;
    letter-spacing: 1px;
    text-align: left;
  }

  h2 {
    font-family: "Rubik", sans-serif;
    font-size: 30px;
    letter-spacing: 1px;
  }

  .searchBar {
    width: 40vh;
    height: 3vh;
    border-radius: 30px;
    border: 1px solid #202020;
    padding: 5px;
    margin-right: 3px;
    font-weight: bold;
    float: left;
    font-size: 20px;
    letter-spacing: 1px;
    padding-left: 20px;
  }

  button {
    border-radius: 30px;
    background: #e9765b;
    border: 1px solid #e9765b;
    padding: 9px;
    color: white;
    font-weight: bold;
    float: left;
  }

  .artistImage {
    width: 30vh;
  }
`;

const Row = styled.div`
  flex-direction: row;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .RelatedArtistCard > * {
    flex: 0 0 40.3333%;
  }
`;
