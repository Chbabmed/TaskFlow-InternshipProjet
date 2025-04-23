import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';

export default function EmployeeDrawer({data, visible, onClose }) {

/*
* --> states declarations :
*/
    const [open, setOpen] = useState(visible);
    const [editable, setEditable] = useState(true)
    const [formValues, setFormValues] = useState({})
/*
    const [saveBtn, setSaveBtn] = useState(false)
*/

/*
* --> Functions declarations :
* */
    useEffect(() => {
        setOpen(visible);

        if(visible === false){
            setFormValues(data)
        }

        return()=>{
            setEditable(true)
        }

    }, [visible]);

    useEffect(() => {
        setFormValues(data);
    }, []);

/*
    useEffect(() => {
        // If formValues changes and is different from initial data, show the Save button
        const isChanged = Object.keys(data).some(
            key => formValues[key] !== data[key]
        );
        setSaveBtn(isChanged);
    }, [formValues, data]);*/



    const HundleEdit = ()=>{

        setEditable(prevState => {
            return !prevState
        })

    }

    const HundleChange = (e)=> {
        const currentTarget = e.target
        const id = currentTarget.id
        let value = currentTarget.value

        if (currentTarget.type === 'checkbox') {
            value = currentTarget.checked
        }

        setFormValues(prevState => {
            return {...prevState, ...{[id]: value}}
        })

        console.log(formValues)
    }

    const sendData =(e)=>{
        e.preventDefault()
    }


    return (
        <Drawer
            title=" "
            placement="right"
            onClose={onClose} // This triggers the onClose function passed from the parent component
            open={open}
            closable={false}
            width={550}
            styles={{
                body: {
                    paddingBottom: 80,
                    background : '#F0F2F5'
                },
            }}
        >
            <div className="flex flex-row mt-6  items-center">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                    </div>
                </div>

                <div className="ml-6">
                    <div className="font-bold">{formValues.nom} {formValues.prenom}</div>
                    <div className="text-sm opacity-50">{formValues.nation}</div>
                </div>
            </div>

            {/* --> Form to display and edit the employee data */}
            <form action="">
                <div className="flex flex-col bg-white mt-12 h-fit pt-2  rounded-xl shadow-md">

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>

                                <span className="ml-3 select-none  text-gray-500">Nom</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                readOnly={editable}
                                className="input focus:outline-none focus:border-none ml-6 input-sm w-full"
                                defaultValue={data.nom}
                                onChange={HundleChange}
                                id="nom"
                            />
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>

                                <span className="ml-3 select-none  text-gray-500">Prénom</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                readOnly={editable}
                                className="input focus:outline-none focus:border-none ml-6 input-sm w-full"
                                defaultValue={data.prenom}
                                onChange={HundleChange}
                                id="prenom"
                            />
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"/>
                                </svg>

                                <span className="ml-3 select-none  text-gray-500">Nationalité</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                readOnly={editable}
                                className="input focus:outline-none focus:border-none ml-6 input-sm w-full"
                                defaultValue={data.nation}
                                onChange={HundleChange}
                                id="nation"
                            />
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                </svg>
                                <span className="ml-3 select-none  text-gray-500">Poste Occupé</span>

                            </label>
                            <select disabled={editable} className="select focus:outline-none ml-6 w-full max-w-xs"
                                    id="post" defaultValue={data.post} onChange={HundleChange}>
                                <option value={data.post}>{data.post}</option>
                                <option value="respo g">Respo G</option>
                                <option value="Respo Tache">Respo Tache</option>
                            </select>
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                </svg>

                                <span className="ml-3 select-none  text-gray-500">Email</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                readOnly={editable}
                                className="input focus:outline-none focus:border-none ml-6 input-sm w-full"
                                defaultValue={data.email}
                                onChange={HundleChange}
                                id="email"
                            />
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* --> Input Group : */}
                    <div className="flex flex-row items-center border-b-2 ">
                        <div className="flex flex-col  basis-10/12 h-fit  py-1 px-2">
                            <label className=" flex flex-row ml-1 items-end">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                </svg>

                                <span className="ml-3 select-none  text-gray-500">Téléphone</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                readOnly={editable}
                                className="input focus:outline-none focus:border-none ml-6 input-sm w-full"
                                defaultValue={data.phone}
                                onChange={HundleChange}
                                id="phone"
                            />
                        </div>

                        {/* --> Edit button */}
                        <div className="basis-2/12 flex justify-center items-center ">
                            <div
                                className="hoverbtn cursor-pointer border-gray-500 bg-white  w-6 h-6 rounded flex justify-center items-center hover:scale-110 transition-all duration-300 "
                                style={{borderColor: "#6e6f6f"}}
                                onClick={HundleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#6e6f6f"
                                     className="size-6   ">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </div>
                        </div>
                    </div>


                 </div>
                <button onClick={sendData} className="btn btn-outline text-success hover:border-success w-full mt-8 hover:bg-success  hover:text-white duration-300 transition-all" >
                    Save
                </button>
            </form>
                {/*

                {JSON.stringify(formValues)}
*/}



        </Drawer>
    );
}
