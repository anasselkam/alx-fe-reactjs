import {useState}from 'react'
import {Link} from "react-router-dom"
import { fetchUserData } from '../services/githubService'

const Search = () => {
  const [query,setQuery]=useState("");
  const [location,setLocation]=useState("");
  const [minRepos,setMinRepos]=useState("");
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const handleSubmit =async (e)=>{
    e.preventDefault()
    setLoading(true)
    setError(null)
    setUsers([])

    try{
      const userData =await fetchUserData(query,location,minRepos)
      setUsers(userData)
    }catch(err){
      setError(err.message)
    }
    setLoading(false)
  }

 

  return (
    <div className="flex flex-col items-center p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub User"
          className="border p-2 rounded-md shadow-sm"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border p-2 rounded-md shadow-sm"
        />
        <input
          type="text"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repositries (optional)"
          className="border p-2 rounded-md shadow-sm"
        />


        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}

      <div className="w-full mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-md shadow-md flex items-center mb-2">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <Link to={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
