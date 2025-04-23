


export default function RespoServiceDashboard(){

    const currentUser = window.localStorage.getItem('CURRENT_USER')

    return(
        <>
            <h1>Respo SERVICE Dashboard</h1>
            <h1>USER / {currentUser}</h1>

        </>
    )
}

