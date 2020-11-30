import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {gsap, TimelineMax, Power2, Back} from 'gsap'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'
import Auxil from './util/Auxil'
import Loader from './util/PageLoader'
import BlogList from './BlogList';


const LandingPage = props => {
    const sectionRef = useRef(null)
    const xAnimation = useRef(null);
    const buttonAnimation = useRef(null)
    const headerTextEffect = useRef(null)
    const doctor = useRef(null)
    const [hasLoaded, setHasLoaded] = useState(false)
    

    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        if (!hasLoaded){
            setHasLoaded(true)
            const tl = new TimelineMax();
            tl.staggerFrom(sectionRef.current,1,{
                opacity: 0.5,
                duration: 1,
                scale: 0,
                delay:.2,
                ease: Power2.easeInOut
            })
            .from(xAnimation.current,1,{
                opacity: 0.5,
                duration: 1,
                x: 500,
                ease: Power2.easeOut
            },1,"-=2")
            .from(buttonAnimation.current,{
                scaleX: 0,
                transformOrigin: 'left',
                left: -50,
            },1, '-=5')
            .to(doctor.current, {
                y: 20,
                repeat: -1,
                ease: Back.easeIn.config(3),
                duration: 4,
                yoyo: true,
            })


        }
    })

    return (
        // !hasLoaded ? <Loader/> :
        <Auxil>
            <div id={'bubble-wrapper'} className={'container-fluid bg-gradient-pd p-5 bubble-wrapper'} style={{position: 'relative', height: '100vh', padding: "0 !important", margin: 0}}>
                <div className="custom-shape-divider-bottom-1606038902">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                <section>
                    <div className="row banner">
                        <div className="col-md-6 mt-5" ref={sectionRef}>
                            <h1 ref={headerTextEffect} className={'text-white-50 stencil-font banner-header mt-3'}>Welcome to <span className="text-danger d-block">Pet Blog</span></h1>
                            <p className="text-white bl-danger bl-2 pl-3"> 
                            Welcome to pet blog! It's great to have you here mate. Signup and get update on how to train your lovly pet. Already have an account? No hussle mate! Click the button below to <strong className=" text-danger"> Cheers!</strong> </p>
                            {!props.is_authenticated && <Link ref={buttonAnimation} to={'/login'} className={'btn btn-danger btn-lg ml-3 mt-3 zi-m-1000'}> Sign in to see interests <i className="fa fa-arrow-right"></i></Link>}
                        </div>
                        <div className="col-md-6">
                            <img ref={doctor} className={'img img-fluid banner-img'} src="http://localhost:8000/assets/img/doc1.png" alt="Doctor Image"/>
                        </div>

                    </div>
                </section>
                {props.is_authenticated && <section className="mt-5 mb-4">
                    <h4 className="text-danger mt-3 mb-3 bl-2 bl-danger pl-2">Latest for you</h4>
                    <BlogList blogs={props.blogs}></BlogList>
                </section>}
            </div>
                
        </Auxil>
    )
}

export default LandingPage;
