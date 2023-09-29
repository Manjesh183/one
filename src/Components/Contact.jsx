import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact me</h1>
            <form>
               
            <div>
                <label>Name</label>
            <input type="text" required placeholder='Abc'></input>
                </div>

                <div>
                <label>Email</label>
            <input type="email" required placeholder='Abc@gmail.com'></input>
                </div>

                <div>
                <label>Message</label>
            <input type="text" required placeholder='tell abt youself'></input>
                </div>

                <button type="submit">Send</button>
                
            </form>
        </main>
    </div>
       
    
  )
}

export default Contact