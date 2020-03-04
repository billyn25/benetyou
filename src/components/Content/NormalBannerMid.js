import React, {useEffect, useState, Fragment} from 'react';
import NormalBannerLi from "./NormalBanner<li>";
import axios from 'axios'
import LoadingSpinner from "../LoadingSpinner";

function NormalBannerMid({url,mode}) {

    const [data, setData] = useState([]);
    const [loading, setLoad] = useState(false);


    useEffect(() => {
            getData()
        },
        [url],
    );

    let getData = async () => {

        setLoad(true);

        await axios.get(url)
            .then(function (response) {
                let {results} = response.data;
                setData(results);
                console.log(results)
                setTimeout(() => {
                    setLoad(false)
                }, 1300);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Fragment>
            {loading ? <LoadingSpinner/> : (
                <div uk-slider="center: true">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider>
                        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl">
                            {Object.keys(data).map(key => (
                                <NormalBannerLi datos={data[key]} mode={mode} key={key}/>
                            ))}
                        </ul>
                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                           uk-slidenav-previous
                           uk-slider-item="previous">&lt;</a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
                           uk-slidenav-next
                           uk-slider-item="next">&gt;</a>
                    </div>
                </div>)}
        </Fragment>
    );
}

export default NormalBannerMid;
