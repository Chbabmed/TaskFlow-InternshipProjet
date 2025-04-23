import {useEffect, useState} from "react";
import Items from "./Items.jsx";

export default function EmployeesTable(props) {

    // eslint-disable-next-line react/prop-types
    const [emp, setEmp] = useState([])

    useEffect(() => {
        setEmp(props.data);
    }, [props.data]);



    const fetchEmployee = ()=>{

        if(emp.length > 0){



            return emp.map((emp,key) =>{
                return <Items key={key} empl={emp}/>
            })
        }else {
            return <tr>NO items</tr>
        }
    }

    return (
        <>
            <div className="mb-3">
                {/* --> table title */}
                <div className="flex flex-row items-center mb-3 ml-1 text-gray-500">
                    <div className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                        </svg>
                    </div>

                    <span className="text-sm font-semibold">
                        {/* eslint-disable-next-line react/prop-types */}
                        {props.title} :
                    </span>
                </div>

                {/* --> table */}
                <div className="bg-white p-3 rounded-3xl">
                    <div>
                        <div className="overflow-x-auto  rounded-3xl overflow-y-auto max-h-72 h-fit">
                            <table className="table bg-white rounded-3xl">
                                <thead className="sticky  top-0 z-10 bg-white">
                                <tr className="h-10">
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                    <th>Poste</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {fetchEmployee()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
