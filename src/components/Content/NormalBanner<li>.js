import React, {useState,useContext} from 'react';
import {ContextApiId} from '../../Context'

function NormalBannerLi({datos}) {

    const {selecId} = useContext(ContextApiId)

    const [isHovering, setIsHovering] = useState(false);

    const {poster_path, title, vote_average, overview,name,id} = datos
    let path = "https://image.tmdb.org/t/p/w780";

    let percent = vote_average * 10;
    let stringCircle = "c100 p" + percent + " small";

    //pasar por encima el raton
    let handleMouseHover = () => {

        setIsHovering(true)
    }

    let handleMouseOut = () => {

        setIsHovering(false)
    }

    //mandar id por context a app.js
    let idData = (id) => {
        selecId(id)
        console.log(id)
    }

    let overlayInfo;
    if (isHovering) {

        let cadena;
        overview !== "" ? cadena = overview.substr(0, 385) + "..." : cadena = "No hay información sobre este título"

        overlayInfo =
            <React.Fragment>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-bottom uk-light">
                        <div className={stringCircle}>
                            <span>{vote_average}</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div></div>
                    </div>
                    <h3 className="h3-film-title ml-3">{title ? title : name}</h3>
                    <p className="p-detail-film">{cadena}</p>
                </div>
            </React.Fragment>
    }

    return (
        <li onMouseOver={handleMouseHover} onMouseLeave={handleMouseOut} onClick={()=>idData(id)}>
            <div className="uk-panel">
                <div className="uk-card-media-top big">
                    <img className="small" src={path + poster_path} alt={title}/>
                    {overlayInfo}
                </div>
            </div>
        </li>
    );
}

export default NormalBannerLi;
