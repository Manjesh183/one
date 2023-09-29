import React from 'react';
import vg from "../Assets/2 (1).webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
        <h1>Techy guy</h1>
        <p>solutions to all problems</p>
        </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="Graphics"></img>
     <div>   
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, quam temporibus? Voluptatibus deserunt tempore recusandae molestiae impedit eaque numquam optio
     sapiente reprehenderit doloremque nostrum commodi minima, illo obcaecati dolorum est?</p>
     </div>

        
    </div>

    <div className="home3" id="about">
        <div>
        <h1>Facts About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi ipsa dolorem aut incidunt quo accusantium quasi ex laudantium voluptate ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem molestiae ut doloribus labore quaerat 
             eveniet accusantium repudiandae porro corrupti!</p>
        </div>

    </div>

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay: "0.3s",}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
       
   
  )
}

export default Home