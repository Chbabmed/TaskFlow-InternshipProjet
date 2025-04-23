import {useEffect, useState} from "react";

export default function HelloComponent(props){

    const [date, setDate] = useState(new Date())

    const currentUser = props.user

    useEffect(() => {

        const currentDate = new Date()
        setDate(currentDate)

    },[]);


    return(
        <>
            <div className="flex flex-row justify-between items-center min-h-24 mb-5">
                <div className="basis-1/2 ">
                    <div className="text-3xl font-bold">{currentUser.nom} {currentUser.prenom}</div>
                    <div>{currentUser.Role}</div>
                </div>
                <div className="basis-1/4 flex justify-end  h-14 items-center ">

                    <div className=" flex drop-shadow-md  bg-white flex-row items-center  w-fit hover  rounded-lg   p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                        </svg>
                        <div className="ml-1 text-sm font-semibold">{date.toDateString()}</div>
                    </div>

                </div>
            </div>
        </>
    )
}