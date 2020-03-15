import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {api_key} from '../../api_key'
import img from "../../img/empty_img.jpg";


function ModalWindowDetail({id, mode}) {

    const [details, setDetails] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
            getDetail()
        },
        [],
    );

    let getDetail = async () => {

        let url;
        let urlCredits;

        url = mode === 'films' ? `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos&language=es` :
            `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&append_to_response=videos&language=es`

        urlCredits = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=credits`;

        await axios.get(url)
            .then(function (response) {
                setDetails(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get(urlCredits)
            .then(function (response) {
                let {credits} = response.data;
                setCredits(credits.crew);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //key video youtube
    let videoId;
    Object.keys(details.videos || {}).map(key => (
        videoId = (Object.keys(details.videos.results[0] || {}).length > 0 ? details.videos.results[0].key : ""
        )))

    let path;
    if (details.poster_path !== null) {
        path = "https://image.tmdb.org/t/p/w780" + details.poster_path
    } else {
        path = img;
    }

    let urlVideo = `http://www.youtube.com/embed/${videoId}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`;

    //filter director
    const result = credits.filter(({job}) => job === "Director")

    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={path} className="card-img" alt={details.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title mb-1">{details.title ? details.title : details.name}</h1>
                        <h4 className="card-title colorPinkLetra">{details.original_title ? details.original_title : details.original_name}</h4>
                        <p className="card-text">{details.overview ? details.overview : 'No hay información sobre este título'}</p>
                        <p className="card-text">
                            {Object.keys(result).map(key => (
                                <small
                                    className="text-muted">{`${mode === "films" ? details.release_date.substring(0, 4) : details.first_air_date.substring(0, 4)}, ${result[key].name}. `}</small>
                            ))}
                            <small
                                className="text-muted font-weight-bold">{mode === "films" ? `${details.runtime} min.` : `${details.number_of_seasons} Temporadas.`}</small>
                        </p>
                        {videoId !== "" ? (
                                <iframe src={urlVideo} width="100%" height="500" frameBorder="0" allowFullScreen
                                        uk-responsive
                                        uk-video="automute: true"></iframe>) :
                            <small className="card-text text-danger">Trailer no disponible</small>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindowDetail;
