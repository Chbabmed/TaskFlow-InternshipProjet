import React, {useEffect, useRef, useState} from 'react';
import { Modal } from 'antd';
import { Button, message, Space } from 'antd'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import axios from "axios";

export default function AddingDepartment({visible,onClose}){

    /* --> States declarations : */
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [RespoDep, setRespoDep] = useState("")
    const [dateCreation, setdateCreation] = useState("")
    const [modalText, setModalText] = useState('Content of the modal');
    const [messageApi, contextHolder] = message.useMessage();
    const onChange = (value) => {
        setRespoDep(value)
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    /* --> Inputs refs */

    const inputNomDepRef = useRef("")
    const inputRespRef = useRef("")


    const dataSend = [
        {
            nomDep  : inputNomDepRef.current.value,
            respDep : RespoDep,
            dateCreation : dateCreation
        }
    ]


    /*--> Functions declarations :*/
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);

        console.log(dataSend)

        axios.post('/Add', dataSend
        )
            .then(function (response) {
                console.log(response);
                success()
            })
            .catch(function (error) {
                console.log(error);
            });

/*        setTimeout(() => {
            setConfirmLoading(false);
            onClose();
        }, 1000);*/
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

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
        setdateCreation(dateString)
    };

    return(
        <>
            {contextHolder}

            <Modal
                title="Ajouter un Département"
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
                                       placeholder="Nom de département" ref={inputNomDepRef}/>
                            </div>
                            <div>
                                <label className="label label-text">Resposable de département :</label>
                                <Select
                                    className="w-full"
                                    showSearch
                                    placeholder="Selectionner un responsable"
                                    optionFilterProp="label"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    options={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },
                                        {
                                            value: 'tom',
                                            label: 'Tom',
                                        },
                                    ]}
                                />
                            </div>
                            <div>
                                <label className="label label-text">Date de création :</label>
                                <DatePicker className="w-full" onChange={onChangeDate} />
                            </div>

                        </div>


                    </div>

                </form>
            </Modal>
        </>
    )
}
