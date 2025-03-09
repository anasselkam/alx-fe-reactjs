import UserContext from "./UserContext"
import React, { useContext } from "react"
export default function UserProfile(props){
return(
<div>
<h2>{props.name}</h2>
<p>Age: {props.age}</p>
<p>Bio: {props.bio}</p>


</div>
)
}