import React,{useState} from 'react';

function Header({mode,searcHeader}) {

    const [selection, setSelection] = useState('films');
    const [word, setWord] = useState('');

    let changeMode = (select) => {
        mode(select)
        setSelection(select)
    }

    let searchW = (e) => {
        e.preventDefault()
        searcHeader(word)
    }

    //reset search screen
    if (word ==='') {
        searcHeader('')
    }

    return (
        <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand pr-2 pl-2" href="https://benetyou.netlify.com/"><span className="colorPinkLetra">B</span>e<span className="colorPinkLetra">N</span>et<span className="colorPinkLetra">Y</span>ou</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className={selection ==='films'?'nav-link colorPink text-white':'nav-link'} onClick={()=>changeMode("films")}>Películas</a>
                    </li>
                    <li className="nav-item">
                        <a className={selection ==='series'?'nav-link colorPink text-white':'nav-link'} onClick={()=>changeMode("series")}>Series</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={searchW}>
                    <input className="form-control mr-sm-2" type="text" onChange={e => setWord(e.target.value)}
                           value={word} placeholder="Buscar"/>
                    <button className="btn btn-secondary my-2 my-sm-0" >Buscar</button>
                </form>
            </div>
        </nav>
        </header>
    );
}

export default Header;
