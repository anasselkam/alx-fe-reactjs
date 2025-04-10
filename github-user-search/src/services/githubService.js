import axios from "axios"

export const fetchUserData = async (query, location, minRepos) => {
    try {
      let searchQuery = `q=${query}`;
      if (location) searchQuery += `+location:${location}`;
      if (minRepos && !isNaN(minRepos)) searchQuery += `+repos:>${minRepos}`;
      
      const url = `https://api.github.com/search/users?q=${searchQuery}`;
      
  
      const res = await axios.get(url);
      
  
      return res.data.items || [];
    } catch (error) {
      
      throw new Error("User not found");
    }
  };