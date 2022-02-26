import { useContext } from "react"
import GithubFinderContext from "../../context/Context"
import RepoItem from "./RepoItem"

const RepoList = () => {

  const { repos } = useContext(GithubFinderContext)

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((item) => {
          return <RepoItem key={item.id} repo={item} />
        })}
      </div>
    </div>
  )
}

export default RepoList