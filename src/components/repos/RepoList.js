import { useContext } from "react"
import GithubFinderContext from "../../context/Context"
import RepoItem from "./RepoItem"

const RepoList = () => {

  const { repos } = useContext(GithubFinderContext)
  const sortedRepos = repos.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count
  })

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title text-primary">
          Popular Repositories
        </h2>
        {sortedRepos.map((item, index) => {
          while(index < 5){
            return <RepoItem key={item.id} repo={item} />
          }
          return ""
        })}
      </div>
    </div>
  )
}

export default RepoList