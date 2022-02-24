import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"


const Navbar = () => {

    const title = "Github Finder"

    return (
        <>

            <div className="navbar bg-base-100 shadow-xl ">
                <div className="navbar-start">
                    <div className="flex flex-row px-2 mx-2">
                        <Link to="/" className='text-lg font-bold align-middle' >
                            <FaGithub className="inline pr-2 text-3xl" />
                        </Link>
                    </div>
                </div>

                <div className="navbar-center">
                    <a href="/" className="btn btn-ghost normal-case text-xl">{title}</a>
                </div>
                <div className="navbar-end">
                    <div className="flex-none px-2 mx-2">
                        <div className="flex justify-end">
                            <Link to="/" className='btn btn-ghost btn-sm rounded-btn' >
                                Home
                            </Link>
                            <Link to="/about" className='btn btn-ghost btn-sm rounded-btn' >
                                About
                            </Link>
                            <div className="dropdown dropdown-end">

                                <label tabIndex="0" className=" btn btn-ghost btn-sm rounded-btn">Change Theme
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="ml-1 inline-block h-4 w-4 fill-current">
                                        <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>
                                </label>
                                <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a href="/">🧁 Cupcake</a></li>
                                    <li><a href="/">🌃 Synthwave</a></li>
                                    <li><a href="/">🤖 Cyberpunk</a></li>
                                    <li><a href="/">🌸 Valentine</a></li>
                                    <li><a href="/">💎 Luxury</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar