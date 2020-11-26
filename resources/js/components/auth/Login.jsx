import React,{useState,useEffect, useRef} from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { gsap, TimelineMax, Power2 } from 'gsap'

import FormGroup from '../util/FormGroup.jsx'
import FormControl from '../util/FormControl.jsx'
import FormLabel from '../util/FormLabel'
import ComponentHeader from '../util/ComponentHeader.jsx'
import Button from '../util/Button.jsx'
import Spinner from '../util/Spinner.jsx'
import {FormFieldValidator} from "../../handlers";



const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid,setIsFormValid] = useState(false)
    const [isEmailValid,setIsEmailValid] = useState(true)
    const [isPasswordValid,setIsPasswordValid] = useState(true)
    const [hasLoaded, setHasLoaded] = useState(false)

    const loginRef = useRef(null)

    useEffect(() => {
        if (!hasLoaded){
            setHasLoaded(true)
            const tl = new TimelineMax();
            tl.from(loginRef.current,1,{
                opacity: 0.5,
                duration: 1,
                y: -200,
                ease: Power2.easeInOut
            })
            .to(loginRef.current, .1,{
                rotation: 5,   
            },"+=.01")
            .to(loginRef.current, .1,{
                rotation: -5,   
            },"+=.01")
            .to(loginRef.current, .1,{
                rotation: 0,   
            },"+=.01");
        }

    })


    const validateForm = () =>{
        return setIsFormValid(new FormFieldValidator(password).isFilled(),new FormFieldValidator(email).isFilled())
    }

    const passwordHandler = password => {
        setPassword(password)
        validateForm();
        return setIsPasswordValid(new FormFieldValidator(password).isFilled())
    }

    const emailHandler = email => {
        setEmail(email)
        validateForm();
        return setIsEmailValid(new FormFieldValidator(email).isFilled());
    }

    const processLogin = () => {
        if (!isFormValid){
            validateForm();
        }
        return props.loginHandler({email, password})
    }

    const renderComponent = () => {

        if (props.isAuthenticated)
           return <Redirect to={props.authRedirectPath || "/"}/>

        return (
            <form  className={'login-form bg-white shadow-lg'} ref={loginRef}>
                {props.is_loading ? <Spinner/> : ""}
                <ComponentHeader>
                    <h5 className={'text-white text-uppercase mb-3'}> <i className="fa fa-lock"></i> Login Form</h5>
                </ComponentHeader>
                <FormGroup>
                    <FormControl
                        value={email}
                        placeholder={'Email'}
                        handler = {emailHandler}
                        has_error={!isEmailValid}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        value={password}
                        placeholder={'Password'}
                        handler = {passwordHandler}
                        type={"password"}
                        has_error={!isPasswordValid}
                    />
                </FormGroup>
                <FormGroup>
                    <Link to={'/forgot-password'} className="text-muted">Forgot password?</Link>
                </FormGroup>
                <FormGroup>
                    <Button
                        handler={() => processLogin()}
                        disabled={props.is_loading || !isFormValid}
                    >Login</Button>
                </FormGroup>
            </form>
        )
    }

    return renderComponent();
}

export default Login;
