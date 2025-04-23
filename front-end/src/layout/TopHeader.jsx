import {useState} from "react";
import {useUserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE} from "../router/web.jsx";

// eslint-disable-next-line react/prop-types
function TopHeader(props) {
    const context = useUserContext();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    let pName = props.pageName;
    const parts = pName.split('/');

    pName === "dashboard" || pName ==="" ? pName = "Dashboard" : pName = props.pageName

    const OpenSideBar = ()=>{
        setOpen(prevState => {
            return !prevState
        })
        // eslint-disable-next-line react/prop-types
        props.onClickIcon(open)
    }

    const hundleLogout = async () => {
        const myToken = window.localStorage.getItem('access_token');
        await context.logout(myToken);
        navigate(LOGIN_PAGE);
    };


    return (
        <>
            <div className="navbar nav bg-gray-200 drop-shadow-md  headerNav" >
                <div className="flex-1">
                    <div tabIndex={0} role="button" onClick={OpenSideBar}  className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <a className="btn btn-ghost text-xl">{parts[1]}</a>
                </div>

                {/*
                *  --> Notification Dropdown
                */}
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                                </svg>

                                <span className="badge badge-sm rounded-badge badge-warning indicator-item">5</span>
                            </div>
                        </div>

                            <ul tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>

                    </div>

                    {/*
                    *  --> profile Dropdown
                    */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={hundleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopHeader;