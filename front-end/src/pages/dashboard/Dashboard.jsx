import React, {useContext, useEffect} from 'react';
import CardComponent from "./CardComponent.jsx";
import HelloComponent from "./HelloComponent.jsx";
import SecondSection from "./SecondSection.jsx";
import {useUserContext} from "../../context/UserContext.jsx";
function Dashboard() {

    const currentUserString = window.localStorage.getItem('CURRENT_USER')

    let userJSON = JSON.parse(currentUserString)

    return (
        <div>

            <div className="drop-shadow-md  headerNav h-40 mb-3 min-h-screen h-fit p-5 " style={{background : '#F0F2F5'}}>

                <HelloComponent user={userJSON}/>
                <CardComponent/>


                <div className=" mt-3 flex pl-3 flex-row ">
                    <div className="basis-1/4 p-3 mr-3 rounded-xl max-h-96 h-72 " style={{background: '#FEF9E5'}}>
                        <div className="ml-3 font-medium text-sm" style={{color: '#F5D547'}}>
                            <span>To do</span>
                        </div>
                        <SecondSection title="first One" description="description One" time="12 days"/>
                    </div>
                    <div className="basis-1/4 p-3 mr-3 rounded-xl max-h-96 h-72 " style={{background: 'rgb(233,232,255)'}}>
                        <div className="ml-3 font-medium text-sm" style={{color: '#6f6bb9'}}>
                            <span>In progress</span>
                        </div>
                        <SecondSection title="second One" description="description second" time=""/>
                    </div>
                    <div className="basis-1/4 p-3 mr-3 rounded-xl max-h-96 h-72 " style={{background: '#e5fbea'}}>
                        <div className="ml-3 font-medium text-sm" style={{color: '#68d780'}}>
                            <span>Done</span>
                        </div>
                        <SecondSection title="third One" description="description  third" time=""/>
                    </div>
                    <div className="basis-1/4 p-3 mr-3 rounded-xl max-h-96 h-72 " style={{background: '#ffe4f7'}}>
                        <div className="ml-3 font-medium text-sm" style={{color: '#ca88b3'}}>
                            <span>Coming Reminders</span>
                        </div>
                        <SecondSection title="fourth One" description="description  fourth" time=""/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;