import React,{useState,useEffect, useRef} from 'react'
import {gsap, TimelineMax, Power2} from 'gsap'

import FormGroup from '../util/FormGroup.jsx'
import FormControl from '../util/FormControl.jsx'
import FormLabel from '../util/FormLabel'
import ComponentHeader from '../util/ComponentHeader.jsx'
import Button from '../util/Button.jsx'
import Spinner from '../util/Spinner.jsx'
import { withRouter } from 'react-router'



const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name,setName] = useState('')
    const [passwordconfirmation, setPasswordconfirmation] = useState('')
    const [hasLoaded, setHasLoaded] = useState(false)
    const slideUpRef = useRef(null)

    useEffect(() => {
        if(!hasLoaded){
            setHasLoaded(true);
            const tl = new TimelineMax();

            tl.from(slideUpRef.current, 1, {

                duration: 1,
                opacity: 0,
                top: 100,
                ease: Power2.easeInOut
            })
            .to(slideUpRef.current, .1,{
                rotation: 1,   
            },"+=.01")
            .to(slideUpRef.current, .1,{
                rotation: -1,   
            },"+=.01")
            .to(slideUpRef.current, .1,{
                rotation: 0,   
            },"+=.01")
            
        }
    })


    const validated = () =>{
        return email.length > 0 && password.length > 0 && passwordconfirmation.length > 0 && name.length > 0;
    }

    const processSignup = () => {
        if (!validated())
            return console.log('You must fill all fields')

        return props.signupHandler({name, email, password, passwordconfirmation})
    }

    return (
        <form  className={'login-form bg-white shadow-lg'} ref={slideUpRef}>
            {props.is_loading ? <Spinner/> : ""}
            <ComponentHeader>
                <h5 className={'text-white text-uppercase mb-3'}> <i className="fa fa-lock"></i> Signup New User</h5>
            </ComponentHeader>
            <FormGroup>
                <FormControl
                    value={name}
                    placeholder={'Your Legal Name'}
                    handler = {setName}
                />
            </FormGroup>
            <FormGroup>
                <FormControl
                    value={email}
                    placeholder={'Email'}
                    handler = {setEmail}
                    type={'email'}
                />
            </FormGroup>
            <FormGroup>
                <FormControl
                    value={password}
                    placeholder={'Password'}
                    handler = {setPassword}
                    type={"password"}
                />
            </FormGroup>
            <FormGroup>
                <FormControl
                    value={passwordconfirmation}
                    placeholder={'Confirm Password'}
                    handler = {setPasswordconfirmation}
                    type={'password'}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>
                    By clicking the signup you agree to our terms and agreements.
                </FormLabel>
            </FormGroup>
            <FormGroup>
                <Button
                    handler={() => processSignup()}
                    disabled={props.is_loading}
                >Sign Up</Button>
            </FormGroup>
        </form>
    )
}

export default SignUp;
