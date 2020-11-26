import React from 'react'
import CardHeader from '../util/CardHeader'
import FormControl from '../util/FormControl'
import FormGroup from '../util/FormGroup'
import SelectableList from '../util/SelectableList'
import DashboardContent from './DashboardContent'
import DashboardNavigation from './DashboardNavigation'
import Interests from './Interests'
import ProfileForm from './ProfileForm'

const Dashboard = props => {

    return (
        <div className={'dashboard-container'}>
            <DashboardNavigation />
            <DashboardContent >
                <CardHeader>
                    Profile
                </CardHeader>

                <div className="row mt-3">
                    <div className="col-md-8">
                        <CardHeader>Profile Update</CardHeader>
                        <ProfileForm user={props.user.user} />
                    </div>
                    <div className="col-md-4">
                        <CardHeader style={{display:'block'}}>Pet interest</CardHeader>
                        <Interests
                            topics={props.user.user.topics}
                        />
                        <form onSubmit={() => {}}>
                            <FormGroup>
                                <FormControl
                                placeholder={'Add New Interest'} />
                                <SelectableList 
                                    items={props.user.user.topics}
                                    field={'topic'}
                                    clickHandler={props.addTopicInterest}
                                />
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </DashboardContent>
        </div>
    );
}

export default Dashboard;