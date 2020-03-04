import React, {useState} from 'react';
import PrincipalContent from "./components/Content/PrincipalContent";
import './App.css';
import Header from "./components/Header";
import {ContextApiId} from './Context'
import Modal from 'react-responsive-modal';
import ModalWindowDetail from "./components/Content/ModalWindowDetail";

function App() {

    const [mode, setMode] = useState('films');
    const [openModal, setOpen] = useState(false)
    const [idContent, setId] = useState(false)


    let selectModefromHeader = (mode) => {
        setMode(mode)
        console.log(mode)
    }

    //id viene del click del li
    let selecId = (id) => {
        setId(id)
        onOpenModal()
    }

    let onOpenModal = () => {
        setOpen(true);
    };

    let onCloseModal = () => {
        setOpen(false);
    };

    return (
        <ContextApiId.Provider value={{selecId}}>
            <Header mode={selectModefromHeader}/>
            <PrincipalContent mode={mode}/>
            <Modal open={openModal} onClose={() => onCloseModal()} center>
                <ModalWindowDetail id={idContent} mode={mode}/>
            </Modal>
        </ContextApiId.Provider>
    );
}

export default App;
