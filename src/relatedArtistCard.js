import React from "react";
import styled from "styled-components";

const RelatedArtistCard = (props) => {
  return (
    <Container>
      <p className="name">{props.name}</p>
      <div className="photo">
        <img
          src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
          alt="star"
        ></img>
      </div>
    </Container>
  );
};

export default RelatedArtistCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: center;

  .photo {
    width: 30vh;
    height: 30vh;
    border-radius: 5px;
  }

  p {
    color: black;
    font-family: "Rubik", sans-serif;
    letter-spacing: 0.5px;
  }
`;
