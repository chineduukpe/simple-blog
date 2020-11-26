import React,{useEffect, useState} from 'react'
import { pharmacareAPI } from '../../util/apis'
import Auxil from '../util/Auxil'
import Spinner from '../util/Spinner'

const Interests = props => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading){
            setIsLoading(false);
            loadUserInterests();
        }
    })

    const loadUserInterests = async () => {
        try {
            const response = await pharmacareAPI.get('user/topics');
            
        } catch (error) {
            console.log(error)
        }
    }

    const renderComponent = () => {
        return props.topics.map(function(topic,index){
            return <li className='tags' key={index}>{topic.topic} <button className="close">x</button></li>
        })
    }

    return (
        <div className="row"> 
            <ul className="col-sm-12">
                {renderComponent()}
            </ul>
        </div>
    )
}

export default Interests;