import React from 'react';

function Footer() {

    return (
        <footer className="bg-dark">
            <h2 className="text-white">&copy; 2020 - <span className="colorPinkLetra">B</span>e<span className="colorPinkLetra">N</span>et<span className="colorPinkLetra">Y</span>ou</h2>
            <p className="text-white mt-3">Toda la información sobre las películas y series más populares de la actualidad.</p>
            <p className="mt-3">
                <a href="https://www.instagram.com/billyn28/" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_sign-in-submit" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="linkedin"></a>
                <a href="mailto:billyndavid@gmail.com" className="uk-icon-button uk-margin-small-right" uk-icon="mail"></a>
            </p>
        </footer>
    )
};

export default Footer;
