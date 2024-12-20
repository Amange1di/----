import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../shared/redux/slices/charactersSlice";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  
  const { results } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const characters = Array.isArray(results) ? results : [];

  return (
    <div id="card" className="center">
      {characters.map((character) => (
        <div className="card" key={character.id}>
          <div className="card_img">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card_text">
            <Link className="name" to={`/detail/${character.id}`} key={character.id}>{character.name}</Link>
            <h4>{character.species} - {character.status}</h4>
            <p>Last known location:</p>
            <h4>{character.location.name}</h4>
            <p>First seen in:</p>
            <h4>{character.origin.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
