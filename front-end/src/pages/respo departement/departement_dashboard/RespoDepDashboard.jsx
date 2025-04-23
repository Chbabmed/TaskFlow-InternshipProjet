

export default function RespoDepDashboard(){

    const currentUser = window.localStorage.getItem('CURRENT_USER')

    return(
        <>
            <h1>Respo Departement Dashboard</h1>
            <h1>USER / {currentUser}</h1>

        </>
    )
}