import React, {useState,useEffect} from 'react'
import { FormFieldValidator } from '../../handlers'
import Button from '../util/Button'


import FormControl from '../util/FormControl'
import FormGroup from '../util/FormGroup'


const ProfileForm = props => {
const {email, name} = props.user;
    return (
        <form >
            <FormGroup>
                <FormControl 
                    value={name}
                ></FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl 
                    value={email}
                ></FormControl>
            </FormGroup>
            <FormGroup>
                <Button
                    handler={() => {}}
                >Update</Button>
            </FormGroup>
        </form>
    )
}

export default ProfileForm;