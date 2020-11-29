import React, { useState } from 'react'
import CardHeader from '../util/CardHeader'
import FileInputWithEvent from '../util/FileInputWithEvent'
import FormControl from '../util/FormControl'
import FormGroup from '../util/FormGroup'
import ProfileImageSection from '../util/ProfileImageSection'
import SelectableList from '../util/SelectableList'
import DashboardContent from './DashboardContent'
import DashboardNavigation from './DashboardNavigation'
import Interests from './Interests'
import ProfileForm from './ProfileForm'
import SelectUserTopic from './SelectUserTopics'

const Dashboard = props => {
    const [searchTopics,setSearchTopics] = useState([])
    
    return (
        <div className={'dashboard-container'}>
            <button className="mobile-menu-toggle btn btn-sm shadow" onClick={() => props.toggleDashboardNav()}>menu </button>
            <DashboardNavigation
                user={props.user.user}
                toggleDashboardNav={props.toggleDashboardNav}
                is_open={props.dashboard_nav_open}
            />
            <DashboardContent >
                <CardHeader className='bl-2 bl-primary text-primary'>
                    Profile
                </CardHeader>

                <div className="row mt-3">
                    <div className="col-md-8">
                        
                            <ProfileImageSection
                             user={props.user.user}
                             imgScale={3}
                             >
                                <FileInputWithEvent
                                    style={{display: 'table',margin: "0 auto 1em"}}
                                    handler={props.changeProfileImage} 
                                 />
                            </ProfileImageSection>
                        <ProfileForm
                         user={props.user.user}
                         handleProfileNameChange={props.handleProfileNameChange}
                          />
                    </div>
                    <div className="col-md-4">
                        <CardHeader style={{display:'block'}} className="shadow text-primary bl-2 bl-primary">Pet interest</CardHeader>
                        
                        <SelectUserTopic
                            topics={props.topics}
                            userTopics={props.userTopics}
                            addTopicHandler={props.addTopicHandler}
                        />
                    </div>
                </div>
            </DashboardContent>
        </div>
    );
}

export default Dashboard;