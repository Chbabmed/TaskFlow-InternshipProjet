

export default function UnauthorizedAccess(){

    return(
        <>

            <div className=" h-screen flex flex-col justify-center items-center">
                < p className='text-2xl font-semibold  select-none' style={{color : '#4A4860'}}>Unauthorized Access!</p>
                <img className="object-contain size-96" src="/src/assets/unauthorized_access.png"/>
            </div>
        </>
    )
}