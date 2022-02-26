import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// instance using axios
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

// Searching All Users
export const searchResults = async (inputText) => {

    const params = new URLSearchParams({
        q: inputText
    })
    const response = await github.get(`/search/users?${params}`)

    return response.data.items
}

// Get User and Repo
export const getUserAndRepo = async (login) => {

    const [singleUser, repos] = await Promise.all([
        github.get(`users/${login}`),
        github.get(`users/${login}/repos`)
    ])

    return { singleUser: singleUser.data, repos: repos.data }
}