

export default function NotFound(){

    return(
        <>

            <div className=" h-screen flex flex-col justify-center items-center">
                <img className="object-contain size-96" src="/src/assets/Page_not_found.png"/>
                < p className='text-2xl font-semibold select-none' style={{color : '#4A4860'}}>Page not found !</p>
            </div>
        </>
    )
}