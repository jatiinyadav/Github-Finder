import { useState, useContext } from "react";
import GithubFinderContext from "../../context/Context";
import { searchResults } from "../../context/GithubActions";

const UserSearch = () => {
    const [inputText, setInputText] = useState("");
    const [alert, setAlert] = useState("");
    const { users, dispatch } = useContext(GithubFinderContext);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputText === "") {
            setAlert(`Please Enter Something ❗❗`);
            setTimeout(() => {
                setAlert(" ");
            }, 2000);
        } else {
            dispatch({
                type: "SET_LOADING",
            });
            const users = await searchResults(inputText);
            dispatch({
                type: "GET_USER",
                payload: users,
            });
            setInputText("");
        }
    };

    return (
        <>
            <h1 className="text-5xl text-center mb-10 font-serif text-accent">
                Search Github Users around the Globe
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
                <div>
                    <h2 className="font-bold mb-1">{alert}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={handleChange}
                                    className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                    placeholder="Search User"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {users.length > 0 && (
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "CLEAR_USER",
                                })
                            }
                            className="btn btn-ghost btn-lg text-primary"
                        >
                            CLEAR{" "}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserSearch;
