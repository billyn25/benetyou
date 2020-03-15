import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios'
import LoadingSpinner from "../LoadingSpinner";
import {api_key} from '../../api_key'
import NormalBannerLi from "./NormalBanner<li>";
import pagination from "../../functions/pagination"

function SearchContent({word, mode}) {

    const [numresult, setNumresult] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoad] = useState(false);
    const [pagina, setPagina] = useState('1');
    const [paginasTotales, setPaginasTotales] = useState('1');

    useEffect(() => {
            getData()
        },
        [word, mode, pagina],
    );

    //reset page if change mode search
    useEffect(() => {
            setPagina(1)
        },
        [mode],
    );

    let getData = async () => {

        setLoad(true);

        let url = mode === 'films' ? `http://api.themoviedb.org/3/search/movie?&query=${word}&api_key=${api_key}&language=es&page=${pagina}&region=ES` :
            `http://api.themoviedb.org/3/search/tv?&query=${word}&api_key=${api_key}&language=es&page=${pagina}&region=ES`;

        await axios.get(url)
            .then(function (response) {
                let {results, total_results, total_pages} = response.data;
                setData(results);
                setNumresult(total_results)
                setPaginasTotales(total_pages)
                setTimeout(() => {
                    setLoad(false)
                }, 1300);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //funcion para cuando pulsas una pagina
    let handleCheck = (e) => {
        window.scrollTo(0, 0);
        let pagina = e.currentTarget.dataset.id;
        setPagina(pagina)
    }

    return (
        <section className="section_sliders">
            {loading ? <LoadingSpinner param={"Buscando"} mode={mode}/> : (
                <Fragment>
                    <div className="d-flex flex-column w-100">
                        <h3 className="mb-0  text-white bg-dark pl-5 pr-5 pt-3 pb-3 w-100 text-center">Resultados {numresult}</h3>
                        <ul className="flex-wrap uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl">
                            {Object.keys(data).map(key => (
                                <NormalBannerLi datos={data[key]} mode={mode} key={key}/>
                            ))}
                        </ul>
                    </div>
                    <ul id="ulpage" className="uk-pagination mt-3 mb-3" uk-margin>

                        {pagination(parseInt(pagina, 10), paginasTotales, handleCheck)}

                    </ul>
                </Fragment>)}
        </section>
    );
}

export default SearchContent;
