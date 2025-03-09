import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const ProfileDetails = () => {
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("isAutenticated");
    navigate("/")
}
  return (
    <div>
      profile details
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default ProfileDetails
