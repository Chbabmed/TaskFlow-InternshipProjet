import {Outlet} from "react-router-dom";
import TopHeader from "./TopHeader.jsx";
import SideBar from "./SideBar.jsx";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import Footer from "./Footer.jsx";

function Layout() {
// resizing the side bare :
    const [open, hundleOpen]= useState(true)
    console.log(open)

    let size1 = open ? "w-[15%]" : "w-[5%]";
    let size2 = open ? "w-[85%]" : "w-[95%]";

// getting the path name :

    const location = useLocation()

    return (
        <>
            <div className="flex h-screen ">
                {/* Side Bar Navigation */}
                <div className={`${size1} h-full flex-shrink-0 transition-all duration-300`}>

                    <SideBar mySize ={size1} />
                </div>
                {/* Main content */}
                <div className={`${size2} flex flex-col ml-3 transition-all duration-300  `}>
                    <header className="z-40 ">
                        <TopHeader onClickIcon={(value) => {hundleOpen(value)}} pageName={location.pathname.substring(1)} />
                    </header>
                    <main className="flex-grow overflow-y-auto mt-2 p-2">
                        <Outlet/>
                        <Footer/>
                    </main>

                </div>
            </div>
        </>
    );
}

export default Layout;