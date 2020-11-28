import React, {useState,useEffect} from 'react'
import { FormFieldValidator } from '../../handlers'
import Button from '../util/Button'


import FormControl from '../util/FormControl'
import FormGroup from '../util/FormGroup'


const ProfileForm = props => {
const {email, name} = props.user;
const [tempName, setTempName] = useState(name) 

const handleNameChange = name => {
    setTempName(name);
}
    return (
        <form >
            <FormGroup>
                <FormControl 
                    value={tempName}
                    handler={handleNameChange}
                ></FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl 
                    disabled
                    value={email}
                ></FormControl>
            </FormGroup>
            <FormGroup>
                <Button
                    classes="btn-sm"
                    handler={() => props.handleProfileNameChange(tempName) }
                >Update</Button>
            </FormGroup>
        </form>
    )
}

export default ProfileForm;