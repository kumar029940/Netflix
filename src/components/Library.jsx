import React from 'react'
import netflix_icon from '../images/netflix_icon.png'
import '../styles/Library.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import profile_1 from '../images/profile_2.jpg'
import spiderman from '../images/spider-man.webp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixSlider from './NetflixSlider';


function Library() {
  return (
    <div>
    <div className = 'align'>
      <div className = 'first_one'>
      <img className = 'netflix_image' src = {netflix_icon} alt = 'netflix' />
      <h4>Home</h4>
      <h4>TV Shows</h4>
      <h4>Movies</h4>
      <h4>New & Popular</h4>
      <h4>My List</h4>
      <h4>Browse by Languages</h4>
      </div>
      <div className = 'second_one'>
      <SearchIcon className = 'search'/>
      <h4>Children</h4>
      <NotificationsNoneOutlinedIcon className = 'search' />
      <div className = 'hence'>
      <img className = 'face' src = {profile_1} alt = 'profile_1' />
      <ArrowDropDownIcon className = 'search'/>
      </div>
      </div>
    </div>
    <div>
      <img className = 'spider-man' src = {spiderman} alt = 'spider-man' />
    </div>

    <div className = 'movies'>
      <div>
     <h3>Movies Based on Books</h3>  
     </div>
     <div className = 'shape'>
      <NetflixSlider/>
      </div>
      </div>
    </div>
  )
}

export default Library
