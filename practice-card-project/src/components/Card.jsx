import React from 'react'
import { Building2 } from 'lucide-react';

const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <div className = {props.state === "available" ? "state" : ""}>
            <h4>{props.state}</h4>
          </div>
          <div className="pay">
          <h3>${props.pay}/hr</h3>
          </div>
        </div>

        <div className="center">
            <img src={props.img} alt="" />
              <h2>{props.name}</h2>
              <p>{props.role}</p>
              <a href=""><Building2 size={12} className='icon'/> {props.company}</a>
            
            <div className="tag">
                {props.skills.map(function(skill, idx) {
                    return <h4 key={idx} id={skill.startsWith("+") ? "skill" : ""}>{skill}</h4>
                })}
            
            </div>
            <div className="bio">
              <p>{props.bio}</p>
            </div>
            
        </div>

        <div className="bottom">
          <button className={props.btnColor === "blue" ? "blue" : "profile"}>View Profile</button>
        </div>
      </div>
  )
}

export default Card
