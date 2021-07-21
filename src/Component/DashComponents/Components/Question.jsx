import React from 'react';
import {Info} from "react-feather";
const Question = ({data}) => {
    // split string.
    const split = (string)=>{
        return string.split(",");
    }
    return (  
        <div className="col-md-4" style={style.box}>
                <h3 style={style.mainTitle}><Info size={12} /> {data.question}</h3>
                <hr />
<section>
            <h6 style={style.title}>Expected Answers.</h6>
                <ol type="A">
                    {split(data.answers).map(answer=><li key={answer} className="showChart">- {answer}</li>)}
                </ol>
            </section>
                </div>
    );
}

const style ={
    box: {
    backgroundColor: "#e7f2ee",
    height: 250,
    padding: 30,
    margin: 1
},
mainTitle: {
fontSize: 14
},
title:{
    fontSize: 12
}
}
 
export default Question;