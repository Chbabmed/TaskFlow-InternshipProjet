import React, {useEffect, useRef, useState} from 'react';
import { Modal } from 'antd';
import { Button, message, Space } from 'antd'

export default function AddingModal({visible,onClose}){

    /* --> States declarations : */
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [messageApi, contextHolder] = message.useMessage();


    /* --> Inputs refs */

    const inputNomRef = useRef("")
    const inputPrenomRef = useRef("")
    const inputNationRef = useRef("")
    const inputPostRef = useRef("")
    const inputEmailRef = useRef("")
    const inputPhoneRef = useRef("")
    const inputPicRef = useRef("")



    /*--> Functions declarations :*/
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        success()
        setTimeout(() => {
            setConfirmLoading(false);
            onClose();
        }, 1000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        onClose();
    };


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Ajouté avec succès',
        });
    };

    return(
        <>
            {contextHolder}
            <Modal
                title="Ajouter un Employé"
                open={visible}
                onClose={onClose}
                onOk={handleOk}
                okText="Ajouter"
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <form>

                    {/*--> form Container*/}
                    <div className="w-full" >

                        {/*input group*/}
                        <div className="w-full ">

                            <div>
                                <label className="label label-text">Nom :</label>
                                <input className="input input-bordered input-sm w-full" type="text"
                                       placeholder="Nom de l'employé" ref={inputNomRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Prénom :</label>
                                <input className="input input-bordered input-sm w-full" type="text"
                                       placeholder="Prénom de l'employé" ref={inputPrenomRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Nationalité :</label>
                                <input className="input input-bordered input-sm w-full" type="text"
                                       placeholder="Nationalité de l'employé" ref={inputNationRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Poste :</label>
                                <select className="select select-sm  select-bordered w-full" ref={inputPostRef}>
                                    <option disabled selected >Choisir un post</option>
                                    <option value="respo 1">respo 1</option>
                                    <option value="respo 2">respo 2</option>
                                </select>
                            </div>
                            <div>
                                <label className="label label-text">Email :</label>
                                <input className="input input-bordered input-sm w-full" type="text"
                                       placeholder="Email de l'employé" ref={inputEmailRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Téléphone :</label>
                                <input className="input input-bordered input-sm w-full" type="number"
                                       placeholder="Téléphone de l'employé" ref={inputPhoneRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Photo de profil :</label>
                                <input type="file"  className="file-input file-input-sm w-full file-input-bordered "/>
                            </div>
                        </div>


                    </div>

                </form>
            </Modal>
        </>
    )
}
