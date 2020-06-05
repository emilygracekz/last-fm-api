import React from "react";
import { useParams } from "react-router-dom";

const Artist = (props) => {
  console.log(props);
  const params = useParams();

  return (
    <div>
      {/* <h1>{params.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: artist.bio.content }} />  */}
    </div>
  );
};

export default Artist;
