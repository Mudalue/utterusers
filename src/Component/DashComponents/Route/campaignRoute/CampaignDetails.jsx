import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {singleCampaign} from "../../../../helpers/API";
import Question from "./../../Components/Question";

const CampaignDetail = () => {
    const {slug} = useParams();
    const [loading, isLoading] = useState(true);
    const [survey, setSurvey] = useState([]);

    useEffect(()=>{
        (async()=>{
            let result = await singleCampaign({slug});
            if(result.status === "success"){
                console.log(result.survey)
                if(!result.survey){
                    console.log("no survey found!");
                } else{
                    setSurvey(result.survey);
                }
            }

            isLoading(false);
        })()
    }, [slug]);

    
    if( loading)   {return <div>Loading data</div>}
    

    return (
        <>
        
            <h3 className="text-center">{survey.title}</h3>
            <h6 className="text-center" style={{fontSize: 12, color : "#050504"}}>{survey.createdAt}</h6>
            <div className="row">
                {
                    survey.questions.map((s)=> <Question data={s}  /> )
                }
            </div>
        </>
      );
}
 
export default CampaignDetail;