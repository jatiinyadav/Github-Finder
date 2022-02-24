import spinner from "./assets/spinner.gif"

function Spinner() {
    return (
        <div className="w-30 mt-20 text-center " >
            <img width={180} className='text-center mx-auto' src={spinner} alt="Loading...." />
        </div>
    )
}

export default Spinner