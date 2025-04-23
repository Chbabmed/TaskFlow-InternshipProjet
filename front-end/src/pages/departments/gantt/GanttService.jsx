import MyGanttDiagram from "./MyGanttDiagram.jsx";
import {useContext} from "react";
import {AppContext} from "../CollapseDep.jsx";
import { useParams } from 'react-router-dom';
export default function GanttService(){
    const dataDep = useContext(AppContext);
    const { id } = useParams();
/*
    const DataDep = useContext(departmentContext)
*/
    console.log("ddd",dataDep)
    return(
        <>
            <div className="drop-shadow-md  headerNav h-40 mb-3 min-h-screen h-fit p-5 "
                 style={{background: '#F0F2F5'}}>

                {/*
                {JSON.stringify()}
*/}            <p className="bg-white w-fit p-3 rounded-xl mb-3"><span className="font-semibold">Departement: </span>Dep 1</p>

                <MyGanttDiagram data="moha"/>
            </div>
        </>
    )
}