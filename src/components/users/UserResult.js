import Spinner from "../layouts/Spinner"
import UserDisplay from "./UserDisplay"
import { useContext } from "react"
import GithubFinderContext from "../../context/Context"

const UserResult = () => {

    const { loading, users } = useContext(GithubFinderContext)

    if (!loading) {
        return (
            <>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
                    {users.map((item) => {
                        return <UserDisplay key={item.id} value={item} />
                    })}
                </div>

            </>
        )
    } else {
        return <Spinner />
    }

}

export default UserResult