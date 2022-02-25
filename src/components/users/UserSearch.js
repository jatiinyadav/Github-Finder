import { useState, useContext } from "react"
import GithubFinderContext from "../../context/Context"

const UserSearch = () => {

    const [inputText, setInputText] = useState('')
    const [alert, setAlert] = useState('')
    const { searchResults } = useContext(GithubFinderContext)

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputText === '') {
            setAlert(`Please Enter Something ❗❗`)
            setTimeout(() => {
                setAlert(" ")
            }, 2000)
        } else {
            searchResults(inputText)
            setInputText('')
        }

    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>

                <h2 className="font-bold" >{alert} </h2>
                <br />
                <form onSubmit={handleSubmit} >
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" value={inputText} onChange={handleChange} className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search User" />
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div>
                {len > 0 ? <button className="btn btn-ghost btn-lg" > CLEAR</button> : ""}
            </div> */}
        </div>
    )
}

export default UserSearch