import React, { useEffect, useState } from "react";
import "../styles/Browse.css";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ProfileList } from "../data3.js";

function Browse() {
  const [profiles, setProfiles] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [icons, setIcons] = useState([]);
  const [editingTodoName, setEditingTodoName] = useState(null)
  const [editedTodoName, setEditedTodoName] = useState("")

  const bundle = { name: input, face: icons[index] };

  useEffect(() => {
    fetchIcons();
  }, [open, close]);

  const fetchIcons = () => {
    setIcons(ProfileList);
    if (index < ProfileList.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    setInput("");
  };

  const handleContinue = () => {
    setOpen(false);
    setProfiles([...profiles, bundle]);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = (ID) => {
    const remove = profiles.filter((profile) => {
      return profile.name !== ID
    })
    setProfiles(remove)
  }

  const handleEdit = (name) => {
    setEditingTodoName(name)
    const nameToEdit = profiles.find((profile) => profile.name === name)
    setEditedTodoName(nameToEdit.name) 
  }

  const handleSave = () => {
    setProfiles(profiles.map((profile) => {
      if(profile.name === editingTodoName){
      return {...profile, name: editedTodoName}
      }
      return profile
    }))
    setEditingTodoName(null)
    setEditedTodoName("")
  }

  return (
    <div className="All_things">
      <div>
        <h1 className="Iam">Who's watching?</h1>
      </div>
      <div className="All_Profiles">
        <div className="all_things">
          <AddCircleOutlineIcon onClick={handleOpen} className="plus" />
          <div className="name">Add Profile</div>
          {profiles.map((profile) => {
            return (
              <div className = 'name_profile_buttons' key={profile.name}>
                {editingTodoName === profile.name ? (
                  <>
                  <input 
                  className="input_Profile_save"
                  type = 'text'
                  value = {editedTodoName}
                  onChange = {(e) => setEditedTodoName(e.target.value)}
                  />
                  <Link to="/library">
                  <img className="makeitLarge" src={profile.face} alt="face" />
                </Link>
                  <button onClick = {handleSave}>Save</button>
                  </>
                ):(
                  <div>
                  <div className="color_vb">{profile.name}</div>
                <Link to="/library">
                  <img className="makeitLarge" src={profile.face} alt="face" />
                </Link>
                <div className = 'delete_Edit'>
                <button className = 'delete_profile' onClick = {() => handleDelete(profile.name)}>Delete</button>
                <button className = 'Edit_profile' onClick = {() => handleEdit(profile.name)}>Edit</button>
                </div>
              </div>
                )}
                </div>
            );
          })}
          {open && (
            <div className="myProfile">
              <h3>Add Profile</h3>
              <p className="small">
                Add a profile for another person watching Netflix
              </p>
              <div className="profile_image">
                <img
                  className="makeitLarge"
                  src={icons[index]}
                  alt="profile_2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={input}
                  onChange={handleInput}
                  className="input_Profile"
                />
              </div>
              <div className="continue_cancel">
                <button onClick={handleContinue} className="response">
                  Continue
                </button>
                <button onClick={handleCancel} className="response">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Browse;