import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacter, useCharacter } from "../../shared/redux/slices/characterSlice";
import { Link, useParams } from "react-router-dom";
import './Detail.scss'
const Detail = () => {
    const dispatch = useDispatch();
    const { character, } = useCharacter();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [id, dispatch]);


    return (
        <div className="">
            <div className="center">
                <div className="detail">
                    <img src={character.image} alt={character.name} />
                    <div className="detail__text">
                        <h2>{character.name}</h2>
                        <p>{character.status} - {character.species}</p>
                        <p>{character.gender}</p>
                        <p>{character.origin?.name}</p>
                        <p>{character.location?.name}</p>
                        <p>{character.created}</p>
                    </div>

                </div>
            </div>
            <Link   className="btn_go" to={"/"}>Artka</Link>
        </div>
    );
};

export default Detail;
