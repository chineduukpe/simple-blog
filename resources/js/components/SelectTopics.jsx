import React from 'react'
import { Link } from 'react-router-dom'
import SelectUserTopic from './dashboard/SelectUserTopics'

const SelectTopics = props => {
    return <div className={'container p-4 bg-white mb-3'}>
        <h4 className={'text-primary pl-2 bl-2 bl-primary mt-2 mb-3'}>Select Topics</h4>
        <SelectUserTopic 
            topics={props.topics}
            userTopics={props.userTopics}
            addTopicHandler={props.addTopicHandler}
        />
        <Link to="/dashboard" className='btn btn-success shadow-lg'>{'Continue >>>'} </Link>
    </div>
}


export default SelectTopics;