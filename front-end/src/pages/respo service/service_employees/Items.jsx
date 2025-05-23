import React, { useState } from 'react';
import EmployeeDrawer from './EmployeeDrawer.jsx';
import { Button, message, Popconfirm } from 'antd';
export default function Items({ empl }) {
    const [open, setOpen] = useState(false);
    const [deleteStat, setDelete] = useState(false)
    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const hundleDelete = ()=> {
        setDelete(prevState => {
            return !prevState
        })
    }
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
/********************************************************************************/


    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{empl.nom} {empl.prenom}</div>
                            <div className="text-sm opacity-50">{empl.nation}</div>
                        </div>
                    </div>
                </td>
                <td>{empl.email}</td>
                <td>{empl.phone}</td>
                <td>{empl.post}</td>
                <th>

                    {/*--> btn to open the drawer : */}
                    <button className="btn btn-ghost btn-xs w-9 h-5" onClick={handleDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                    </button>

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
                        <button className="btn btn-ghost btn-xs w-9 h-5"
                            onClick={hundleDelete}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="#fe5d5f" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>

                        </button>
                    </Popconfirm>
                </th>
            </tr>

            {/* Pass the open state and handleClose function to EmployeeDrawer */}
            <EmployeeDrawer visible={open} data={empl} onClose={handleClose}/>

            {/*--> the pop Confirm to delete:*/}


        </>
    );
}
