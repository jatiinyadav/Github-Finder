import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/layouts/Spinner'
import GithubFinderContext from '../context/Context'

const SingleUser = () => {

    const { searchSingleUser, singleUser } = useContext(GithubFinderContext)

    const params = useParams()

    useEffect(() => {
        searchSingleUser(params.login)
    }, [])


    if (singleUser !== undefined) {

        const { login, id } = singleUser

        return (
            // <div>{singleUser.login}</div>
            <div className='text-center' >
                <h2>{login}</h2>
                <h2>{id}</h2>
            </div>
        )
    } else {
        return <Spinner />
    }

}

export default SingleUser