import { useEffect, useState } from "react"
import Spinner from "../layouts/Spinner"

const UserResult = () => {

    const [result, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchResults()
        setLoading(false)
    }, [])

    const fetchResults = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setResults(data)
    }

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
                {result.map((item) => {
                    return <h2 key={item.id} >{item.login}</h2>
                })}
            </div>
        )
    } else {
        return <Spinner />  
    }

}

export default UserResult