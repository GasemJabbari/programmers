import React from "react";

const Card = ({id, name , email})=>{
    return(
        <div className="bg-white dib br3 pa3 ma2 grow ba b--black-10 bw shadow-5 tc ">
            <img alt="robot" src={`https://robohash.org/${id}?size=300x300`}></img>
                <div>
                    <h2 className="">{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    );

}

export default Card;