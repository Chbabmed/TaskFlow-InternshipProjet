import {useEffect, useState} from "react";
import {useUserContext} from "../context/UserContext.jsx";

export default function SideBar(props) {

    const context = useUserContext()

    const role = window.localStorage.getItem('ROLE')

    let logoPath = ""
    let picSize = ""
    let showText = true;
    let btnWidth = "btn-wide";
    let notOpen = true

    const [menu, setMenu] = useState(false)
    const [menuDep, setMenuDep] = useState(true)
    const [submenuDep, setSubmenuDep] = useState(null);
    const [isHidden, setIsHidden] = useState(null);


    const toggleMenuDep = () => {
        setMenuDep((prev) => !prev);
    };

    const toggleSubmenuDep = (index) => {
        setSubmenuDep((prev) => (prev === index ? null : index));
    };
    const closeMenu = ()=>{
        setMenu(prevState => {
            return !prevState
        })

    }

    useEffect(()=>{

        if(role === 'responsable tache'){
            setIsHidden ('hidden')
        }


    }, [])



/*    const closeMenuDep = ()=>{
        setMenuDep(prevState => {
            return !prevState
        })
    }*/


    useEffect(() => {
        if (props.mySize !== "w-[15%]") {
            setMenu(prevState => false);
/*
            setMenuDep(prevState => true)
*/
        }
    }, [props.mySize]);



    // eslint-disable-next-line react/prop-types
    if (props.mySize === "w-[15%]") {
        logoPath = "/src/assets/logo2.png";
        picSize = "size-36";
        btnWidth = "w-100";


    } else {
        logoPath = "/src/assets/logo solo.png";
        picSize = "size-10";
        showText = false;
        btnWidth = "w-14";
        notOpen = false
    }

    return (
        <>
            <div className="w-full h-screen nav flex flex-col items-center sideBar">

                {/*-> APP Logo : */}
                <div className="mt-4">
                    <img className={`${picSize}  object-scale-down h-10 transition-all duration-300`} src={logoPath}
                         alt=""/>
                </div>



                {/*-> All Links : */}

                <div className=" h-full w-auto flex flex-col mt-20 items-center ">
                    <div className="divider"></div>
                    {/*-> Dashboard */}
                    <a role="button" href={`/${role}/dashboard`}
                       className={`btn ${btnWidth} bg-gray-300 mb-3 flex flex-row items-center flex-nowrap   transition-ease duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                        </svg>
                        {showText && <span className=" w-32 text-base">Dashboard</span>}
                    </a>

                    {/*-> Global_Employees */}
                    <a role="button" href={`/${role}/Employees`}
                       className={`btn ${btnWidth} ${isHidden} bg-gray-300 mb-3 flex flex-row items-center justify-center transition-ease duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                        </svg>
                        {showText && <span className="w-32  text-base">Employees</span>}
                    </a>

                    {/*-> Departments */}
                    <div className="dropdown dropdown-right">

                        <a role="button" tabIndex={0} href={`/${role}/Departments`}
                           className={`btn ${btnWidth} ${isHidden}  bg-gray-300 mb-3 flex flex-row items-center justify-center transition-ease duration-300`}
                           /*onClick={closeMenuDep}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/>
                            </svg>

                            {showText && <span className="w-32 text-base">Departments</span>}
                        </a>

{/*                        {menuDep && (
                            <ul tabIndex={0}
                                className="ml-3 menu dropdown-content w-auto min-w-48 flex flex-col flex-nowrap overflow-y-auto overflow-x-hidden max-h-56 bg-base-100 rounded-box z-[1] w-52 p-2 shadow mb-3 transition-ease duration-300">
                                <li>
                                    <a onClick={() => toggleSubmenuDep(1)}>department 1</a>
                                    {submenuDep === 1 && (
                                        <ul className=" ml-3 mt-1 bg-gray-100 rounded-box w-40 p-2 mb-2 shadow">
                                            <li><a>Service 1</a></li>
                                            <li><a>Service 2</a></li>
                                            <li><a>Service 3</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li><a>department 2</a></li>
                                <li>
                                    <a onClick={() => toggleSubmenuDep(2)}>department 3</a>
                                    {submenuDep === 2 && (
                                        <ul className="ml-3 mt-1 bg-gray-100 rounded-box w-40 p-2 shadow">
                                            <li><a>Service 1</a></li>
                                            <li><a>Service 2</a></li>
                                            <li><a>Service 3</a></li>
                                        </ul>
                                    )}
                                </li>

                            </ul>
                        )}*/}
                    </div>

                    <div className="divider"></div>
                </div>


            </div>
        </>
    );
}
