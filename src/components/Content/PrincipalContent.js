import React, {useEffect, useState} from 'react';
import axios from 'axios'
import FirstBanner from "./FirstBanner";
import {
    url_popular,
    url_cinema,
    url_terror,
    url_romantic,
    url_tv_popular,
    url_tv_crime,
    url_tv_Scifi,
    url_tv_docu, url_mistery, url_tv_comedy
} from '../../api_key'
import NormalBannerMid from "./NormalBannerMid";
import LoadingSpinner from "../LoadingSpinner";

function PrincipalContent({mode}) {
    const [popularesData, setPopularesData] = useState([]);
    const [loading, setLoad] = useState(false);

    useEffect(() => {
            getFilmsPopular()
        },
        [mode],
    );

    let getFilmsPopular = async () => {

        setLoad(true);
        await axios.get(mode === 'films' ? url_popular : url_tv_popular)
            .then(function (response) {
                let {results} = response.data;
                setPopularesData(results);
                setTimeout(() => {
                    setLoad(false)
                }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="section_sliders">
            {loading ? <LoadingSpinner/> : (
                // first banner
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1"
                     uk-slider="clsActivated: uk-transition-active; center: true; autoplay:true;">
                    <ul className="uk-slider-items uk-grid">
                        {Object.keys(popularesData).map(key => (
                            <FirstBanner datos={popularesData[key]} key={key}/>
                        ))}
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                       uk-slidenav-previous
                       uk-slider-item="previous">&lt;</a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                       uk-slider-item="next">&gt;</a>
                </div>)}
            {/* end first banner */}
            {/* cinema banner */}
            <h1 className="mb-0 mt-4 text-white bg-dark pl-5 pr-5 pt-2 pb-2 w-100 text-center">{mode === 'films' ? 'En cines' : 'Sobre crímenes'}</h1>
            <NormalBannerMid
                url={mode === 'films' ? url_cinema : url_tv_crime} mode={mode}/>
            {/* end cinema banner */}
            {/* terror banner */}
            <h1 className="mb-0 mt-4 text-white bg-dark pl-5 pr-5 pt-2 pb-2 w-100 text-center">{mode === 'films' ? 'De terror' : 'Sci-fi y fantásticas'}</h1>
            <NormalBannerMid
                url={mode === 'films' ? url_terror : url_tv_Scifi} mode={mode}/>
            {/* end terror banner */}
            {/* romantic banner */}
            <h1 className="mb-0 mt-4 text-white bg-dark pl-5 pr-5 pt-2 pb-2 w-100 text-center">{mode === 'films' ? 'Románticas' : 'Documentales'}</h1>
            <NormalBannerMid
                url={mode === 'films' ? url_romantic : url_tv_docu} mode={mode}/>
            {/* end mistery banner */} {/* cinema banner */}
            <h1 className="mb-0 mt-4 text-white bg-dark pl-5 pr-5 pt-2 pb-2 w-100 text-center">{mode === 'films' ? 'De misterio' : 'De comedia'}</h1>
            <NormalBannerMid
                url={mode === 'films' ? url_mistery : url_tv_comedy} mode={mode}/>
            {/* end mistery banner */}
        </section>
    );
}

export default PrincipalContent;
