import React, {useState} from 'react';
import EmplTable from "./EmplTable.jsx";
import EmployeesTable from "./EmployeesTable.jsx";
import AddingModal from "./AddingModal.jsx";

export default function Global_Employees() {

    const Data = [
        {
            nom: "chbab",
            prenom: "mohamed",
            email : "moha@gmail.com",
            phone : '0652450042',
            nation : "Marocain",
            post : "departement informatique"
        },
        {
            nom: "Moumad",
            prenom: "Rachid",
            email : "rachid@gmail.com",
            phone : '0642110054',
            nation : "Marocain",
            post : "RH"
        },
        {
            nom: "SAADI",
            prenom: "Ahmed",
            email : "brahim@gmail.com",
            phone : '0657575757',
            nation : "Marocain",
            post : "Service client"
        }
    ]
    const [openModal, setOpenModal] = useState(false)

    const hundleOpenModal =()=>{
        setOpenModal(prevState => !prevState)
    }

    const handleClose = () => {
        setOpenModal(false);
    };

    console.log(openModal)

    return (
        <div>
            <div className="drop-shadow-md  headerNav h-40 mb-3 min-h-screen h-fit  p-6 " style={{background : '#F0F2F5'}}>

                <div className=" w-full flex justify-end" >
                    <button
                        className="btn btn-sm btn-info text-white hover:drop-shadow-md hover:scale-100 hover:bg-white hover:text-info"
                        onClick={hundleOpenModal}
                    >
                        Ajouter Employé
                    </button>
                </div>

                <EmployeesTable data = {Data} title = "Les Responsbles Global" />
{/*                <EmployeesTable data = {Data} title = "Les Responsble Des Departements" />
                <EmployeesTable data = {Data} title = "Les Responsables des Services" />
                <EmployeesTable data = {Data} title = "Les Responsables des Tâches" />*/}

            </div>
            <AddingModal visible={openModal} onClose={handleClose}/>
        </div>
    );
}

