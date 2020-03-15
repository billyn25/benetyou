import React, {useState} from 'react';
import PrincipalContent from "./components/Content/PrincipalContent";
import './App.css';
import Header from "./components/Header";
import {ContextApiId} from './Context'
import Modal from 'react-responsive-modal';
import ModalWindowDetail from "./components/Content/ModalWindowDetail";
import SearchContent from "./components/Content/SearchContent";
import Footer from "./components/Footer";

function App() {

    const [mode, setMode] = useState('films');
    const [openModal, setOpen] = useState(false)
    const [idContent, setId] = useState('')
    const [search, setSearch] = useState('')

    let selectModefromHeader = (mode) => {
        setMode(mode)
    }

    //id viene del click sonre pelicula<li>
    let selecId = (id) => {
        setId(id)
        onOpenModal()
    }

    //word header search bar
    let wordSearch = (word) => {
        setSearch(word)
    }

    let onOpenModal = () => {
        setOpen(true);
    };

    let onCloseModal = () => {
        setOpen(false);
    };

    return (
        <ContextApiId.Provider value={{selecId}}>
            <Header mode={selectModefromHeader} searcHeader={wordSearch}/>
            {search ? <SearchContent word={search} mode={mode}/> : (
            <PrincipalContent mode={mode}/>
            )}
            <Modal open={openModal} onClose={() => onCloseModal()} center>
                <ModalWindowDetail id={idContent} mode={mode}/>
            </Modal>
            <Footer/>
        </ContextApiId.Provider>
    );
}

export default App;
