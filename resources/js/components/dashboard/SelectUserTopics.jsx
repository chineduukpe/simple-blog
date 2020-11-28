import React,{useState} from 'react'
import Auxil from '../util/Auxil'
import FormControl from '../util/FormControl'
import FormGroup from '../util/FormGroup'
import SelectableList from '../util/SelectableList'
import Interests from './Interests'


const SelectUserTopic = props => {
    
    const [searchTopics,setSearchTopics] = useState([])

    const handleTopicFieldChange = val => {
        if (val.length) {
            
            if (val == '*') {
                return setSearchTopics(props.topics)
            }
            return setSearchTopics(props.topics.filter(function(topic){
                return topic.topic.toLowerCase().startsWith(val.toLowerCase())
            }))
        }
        return setSearchTopics([]);
    }

    return (
        <Auxil>
            <Interests
                topics={props.userTopics}
            />
                        <form onSubmit={() => {}}>
                            <FormGroup>
                                <FormControl
                                    placeholder={'Type to search pet interest'}
                                    handler={handleTopicFieldChange}
                                    classes={'shadow'}
                                 />
                                <SelectableList 
                                    items={searchTopics}
                                    field={'topic'}
                                    clickHandler={props.addTopicHandler}
                                />
                                <p style={{color:'rgba(100,100,100,.6)',textAlign: 'center',fontSize: '.8em', marginTop: '.5em'}}>Enter * for all topics</p>
                            </FormGroup>
                        </form>
        </Auxil>
    )
}

export default SelectUserTopic;