import React,{useEffect, useRef, useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userTopicsLoaded, loadTopics, removeTopicInterest } from '../../actions'
import { pharmacareAPI } from '../../util/apis'
import Auxil from '../util/Auxil'
import Spinner from '../util/Spinner'
import {TweenMax, TimelineMax} from 'gsap'

const Interests = props => {
    const [isLoading,setIsLoading] = useState(true);
    const tag = useRef(null)
    
    useEffect(() => {
        const tl = new TimelineMax();
        tl.from(tag.current,1,{
            left: 50,
            duration: 1,
        });
        if(isLoading){
            loadUserInterests();
        }
    })

    const loadUserInterests = async () => {
        setIsLoading(false);
        props.loadTopics()
        try {
            const response = await pharmacareAPI.get('user/topics');
            props.userTopicsLoaded(response.data.topics)
        } catch (error) {
            console.log(error)
        }
    }

    const renderComponent = () => {
        return props.topics.map(function(topic,index){
            return <li ref={tag} className='tags shadow' key={index}>{topic.topic} <button className="close" onClick={() => props.removeTopicInterest(topic.id)}>x</button></li>
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


const matchDispatchToProps = dispatch =>{
    return bindActionCreators({
        userTopicsLoaded,
        loadTopics,
        removeTopicInterest,
    },dispatch);
}
export default connect(null, matchDispatchToProps)(Interests);