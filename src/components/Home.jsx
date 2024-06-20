import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.css'
import { descriptionList } from "../data1.js";
import home_screen from "../images/home_screen.jpg";
import netflix_icon from "../images/netflix_icon.png";


function Home({index, handleNextIndex}) {

  const [input, setInput] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleInput = (e) => {
    if(e.target.value.trim().length> 0 && e.target.value.includes('@gmail.com')){
      setRedirect(true)
    }
    setInput(e.target.value)
  }


  return (
    <div>
      <div className="yes">
        <img className="background_image" src={home_screen} alt="home" />
      </div>
      <div className="wrapper">
        <div className="together">
          <nav className="nav-bar">
            <div>
              <img
                className="netflix_icon"
                src={netflix_icon}
                alt="Netflix Icon"
              />
            </div>
            <div>
              <button className="sign_out button1">Sign in</button>
            </div>
          </nav>

          <div className="middle">
            <h1 className="white margin">
              Unlimited movies, TV shows and more
            </h1>
            <h3 className="white margin2">Watch anywhere. Cancel anytime</h3>
            <h3 className="white margin1">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="flex">
              <div>
                <input
                  className="input_email"
                  type="email"
                  value = {input}
                  onChange = {handleInput}
                  placeholder="Email address"
                />
              </div>
              {redirect === true  ? (<Link to = '/Browse'>
              <button  className="membership button1">Get Started!</button>
              </Link>) : (
                <Link to = '/'>
                <button className="membership button1">Get Started!</button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="Answer">
          <h1 className="white1">Frequently Asked Questions</h1>
          {descriptionList.map((item) => (
            <div className="oo" key={item.id}>
              <div>
                <button
                  className="padding btnItem"
                  onClick={() => handleNextIndex(item.id)}
                >
                  <span>{item.question}</span>
                  <span>{index === item.id ? "x" : "+"}</span>
                </button>
              </div>
              <div
                className={`content nm ${
                  index === item.id ? "content-visible" : "content-hidden"
                }`}
              >
                {index === item.id && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home