import React, { useEffect, useState } from "react";
import "../styles/Browse.css";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {ProfileList} from '../data3.js'

function Browse() {

  const [profiles, setProfiles] = useState([])
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(null)
  const [icons, setIcons] = useState([])

  const bundle = {name: input, face: icons[index]}

  useEffect(() => {
    fetchIcons()
  }, [open,close])

  
  const fetchIcons = () => {
    setIcons(ProfileList)
    if(index < ProfileList.length-1){
      setIndex((prev) => prev+1)
      }else{
        setIndex(0)
      }
  } 

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleOpen = () => {
    setOpen(true)
    setInput("")
  }

  const handleContinue = () => {
    setOpen(false)
    setProfiles([...profiles, bundle])
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <div className="All_things">
      <div>
        <h1 className="Iam">Who's watching?</h1>
      </div>
      <div className="All_Profiles">
        <div className="all_things">
        <AddCircleOutlineIcon onClick = {handleOpen} className = 'plus' />
        <div className = 'name'>Add Profile</div>
        {profiles.map((profile) => {
          return (
            <div key = {profile.name}>
              <div className = 'color_vb'>{profile.name}</div>
              <Link to = '/library'>
              <img className = 'makeitLarge'  src = {profile.face} alt = 'face' />
              </Link>
            </div>
          )
        })}
        {open && (
        <div className = 'myProfile'>
        <h3>Add Profile</h3>
        <p className="small">Add a profile for another person watching Netflix</p>
        <div className = 'profile_image'>
        <img className = 'makeitLarge' src = {icons[index]} alt = 'profile_2' />
        <input
        type = 'text'
        placeholder="Name"
        value = {input}
        onChange = {handleInput}
        className="input_Profile"
        />
        </div>
        <div className = 'continue_cancel'>
        <button onClick = {handleContinue} className="response">Continue</button>
        <button onClick = {handleCancel} className="response">Cancel</button>
        </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Browse;
