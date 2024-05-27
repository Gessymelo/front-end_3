import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Repos = () => {
  const {userName} = useParams();

  


  return (
    <div>Repos {userName}</div>
  )
}

export default Repos