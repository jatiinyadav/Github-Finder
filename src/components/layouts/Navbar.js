import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {

    const title = "Github Finder"

    return (
        <div class="navbar bg-black-100 shadow-xl">
            <div class="navbar-start">
                <div className="flex flex-row px-2 mx-2">
                    <Link to="/" className='text-lg font-bold align-middle' >
                        <FaGithub className="inline pr-2 text-3xl" />
                    </Link>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-xl">Github Finder</a>
            </div>
            <div class="navbar-end">
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to="/" className='btn btn-ghost btn-sm rounded-btn' >
                            Home
                        </Link>
                        <Link to="/about" className='btn btn-ghost btn-sm rounded-btn' >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar