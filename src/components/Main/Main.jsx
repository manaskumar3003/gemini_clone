import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context'
import { assets } from '../../assets/assets'
const Main = () => {

    const{onSent,recentPrompt,showResult,Loading,resultData,setInput,input}= useContext(Context)


  return (

    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src ={assets.user_icon} alt=''/>
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            
           
            <div className="greet">
                <p><span>Hello,Manny</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>suggest beautiful place to see in an upcoming road trip </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>briefly summarise te concept :urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>brainstorm team bonding activites for oyr work retreat </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>increase the readibilty of the code </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :
            <div className="result">
                <div className="result-title">
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {Loading
                    ?<div className='loader'>
<hr />
<hr />
<hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   
                </div>
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter prompt here'/>
                
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
            <p className="bottom-info">
                gemini may display inaccurate data and details
            </p>
        </div></div>
        
    </div>
  )
}

export default Main