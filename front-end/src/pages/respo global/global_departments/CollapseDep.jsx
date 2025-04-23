import React, {createContext, useState} from 'react';
import {message, Popconfirm} from "antd";
import {useNavigate} from "react-router-dom";

export const AppContext = createContext();
export default function CollapseDep({data}){
    const [dataDep, setDataDep] = useState(data);

    const navigate = useNavigate()

    const departmentData = {
        nomDep: "Department Name",
        dateCreation: "2024-08-24",
        resposables: [
            { nom: "John", prenom: "Doe" },
            { nom: "Jane", prenom: "Smith" }
        ]
    };
    const hundleNavigation = ()=>{
        const id = 10
        navigate('/responsable global/Services/'+id)
    }

    const fetchResponsables = () => {
        if (data.resposables && data.resposables.length > 0) {
            return data.resposables.map((resp, key) => {
                return <div key={key} className="ml-2 w-fit inline-block text-xs bg-gray-200 rounded-full p-1">{resp.nom} {resp.prenom}</div>;  // Use resp.name instead of resp.nom
            });
        } else {
            return <span className="ml-2 text-sm text-gray-500">No responsables assigned</span>;
        }
    };

    /*******************************************************************************
     *----> Pop Confirm declarations :
     */
    const confirm = (e) => {
        console.log(e);
        message.success('Deleted Successfully');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Not deleted');
    };

    console.log(data.resposables)
    return(
        <>
                <details className="collapse mt-6 collapse-arrow collapse bg-white ">
                    <summary className="collapse-title text-lg font-medium duration-300 transition-all">
                        <div className="flex flex-row items-center">
                            <div className='rounded-full bg-amber-300 w-8 h-8 mr-3 flex items-center  justify-center'
                                 style={{background: '#D1D5DB'}}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                     stroke="#F0F2F5" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                                </svg>
                            </div>

                            <div className="flex flex-row items-center justify-between  w-full">
                                <span>
                                    {data.nomDep}
                                </span>
    {/*
        --> Navigation button
    */}
                                <button className="btn btn-ghost btn-sm"
                                onClick={hundleNavigation}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>
                                    </svg>
                                    Voir les services et les tâches
                                </button>
                            </div>
                        </div>
                    </summary>
                    <div className="collapse-content">
                        <div className="flex flex-row">
                            <div className="basis-5/12 flex flex-col">
                                <div>
                                    <span className="text-sm text-gray-500">Date de création :</span>
                                    <span className="ml-2 text-sm ">{data.dateCreation}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Les responsables :</span>
                                    {fetchResponsables()}
                                </div>
                            </div>
                            <div className="basis-5/12">
                                <div>
                                    <span className="text-sm text-gray-500">Date de création :</span>
                                    <span className="ml-2 text-sm ">{data.dateCreation}</span>
                                </div>
                            </div>
                            <div className="basis-2/12 flex flex-row h-12 ">
                                <div className="">
                                    <span className="text-sm text-gray-500  ">Actions :</span>
                                </div>
                        {/* --> Actions : */}
                                <div className="flex ml-4 ">
    {/*                                <button className="btn btn-ghost btn-xs w-9 h-5" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5}
                                             stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </button>*/}

                                    {/*--> The btn to open the Pop confirm*/}
                                    <Popconfirm
                                        title="Delete This row"
                                        description="Are you sure to delete this row?"
                                        placement="topRight"
                                        onConfirm={confirm}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <button className="btn btn-error btn-xs w-fit h-5 text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5}
                                                 stroke="#ffff" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                            </svg>
                                            Supprimer
                                        </button>
                                    </Popconfirm>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
        </>
    )
}