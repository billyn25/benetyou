import React, {useContext} from 'react';
import {ContextApiId} from '../../Context'
import img from '../../img/empty_img.jpg';

function FirstBanner({datos}) {

    const {selecId} = useContext(ContextApiId)

    const {poster_path, title, vote_average, original_language, overview,name,id} = datos
    let path = "https://image.tmdb.org/t/p/w1280";

    let cadena;
    overview !== "" ? cadena = overview.substr(0, 385) + "..." : cadena = "No hay información sobre este título"

    let percent = vote_average * 10;
    let stringCircle = "c100 p" + percent + " small";

    //mandar id por context a app.js
    let idData = (id) => {
        selecId(id)
    }

    return (
        <li className="uk-width-3-5" onClick={()=>idData(id)}>
            <div className="uk-panel">
                <img className="big" src={path + poster_path} alt={title} onError={
                    (e) => e.target.src = img}/>
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                        <div className={stringCircle}>
                            <span>{vote_average}</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h3 className="h3-film-title ml-2">{title ? title : name}</h3>
                    </div>
                    <p className="p-detail-film">{cadena}</p>
                </div>
            </div>
        </li>
    );
}

export default FirstBanner;
