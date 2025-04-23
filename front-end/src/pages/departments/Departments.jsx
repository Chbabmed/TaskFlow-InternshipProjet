import React, {useState} from "react";
import MyGanttDiagram from "./gantt/MyGanttDiagram.jsx";
import AddingModal from "../employees/AddingModal.jsx";
import AddingDepartment from "./AddingDepartment.jsx";
import CollapseDep from "./CollapseDep.jsx";


export default function Departments(){

    const dataDep = [
        {
            nomDep: "Dep 1",
            resposables: [
                {
                    nom: "CHBAB",
                    prenom: "Mohamed"
                },
                {
                    nom: "LEMIM",
                    prenom: "Hicham"
                },
                {
                    nom: "EL HANSALI",
                    prenom: "Soumia"
                },
            ],
            dateCreation: "10/08/2024"
        },
        {
            nomDep: "Dep 2",
            resposables: [
                { nom: "RespoDep 2" }
            ],
            dateCreation: "10/08/2024"
        }
    ];

    const fetchDeps = ()=>{

        if(dataDep.length > 0){



            return dataDep.map((dataDep,key) =>{
                return <CollapseDep key={key} data={dataDep} />
            })
        }else {
            return <tr>NO items</tr>
        }
    }

    const [openModal, setOpenModal] = useState(false)
    const hundleOpenModal =()=>{
        setOpenModal(prevState => !prevState)
    }

    const handleClose = () => {
        setOpenModal(false);
    };

    return(
        <>
            {/*<MyGanttDiagram />*/}
            <div className="drop-shadow-md  headerNav h-40 mb-3 min-h-screen h-fit p-5 " style={{background: '#F0F2F5'}}>
                <div className="w-full flex justify-end">
                    <button className='btn btn-sm btn-info text-white hover:drop-shadow-md hover:scale-100 hover:bg-white hover:text-info'
                    onClick={hundleOpenModal}
                    >
                        Ajouter Département
                    </button>
                </div>
            {/* -->Adding department Pop Up */}
                <AddingDepartment visible={openModal} onClose={handleClose}/>

            {/* --> Collapse Of Departments :*/}
                {fetchDeps()}

            </div>
        </>
    )
}