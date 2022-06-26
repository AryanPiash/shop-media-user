import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slide1 from '../../assets/img/logos/slide-1.png'
import slide2 from '../../assets/img/logos/slide-2.png'
import slide3 from '../../assets/img/logos/slide-3.png'
import slide4 from '../../assets/img/logos/slide-4.png'
import slide5 from '../../assets/img/logos/slide-5.png'
import slide6 from '../../assets/img/logos/slide-6.png'



function HomePage() {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            sstrings: [
                '<div>Your one-stop shop for all <br> your <span>Media buying needs</span></div>',
                'Find and compare <span>Advert <br> Spaces</span> and <span>Prices</span> within Nigeria'
            ],
            typeSpeed: 40,
            backDelay: 0,
            backSpeed: 30,
            fadeOut: false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 100,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
            contentType: 'html',
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div>
            <Navigation />

            {/*------- Main area start -------*/}
            <main className="">
                {/*------- Hero area start -------*/}
                <section className="hero-area">
                    <div className="container">
                        <div className="hero-wrapper">
                            <div className="hero-shape-1">
                                <img src="assets/img/hero-img-1.png" alt="" />
                            </div>
                            <div className="hero-shape-2">
                                <img src="assets/img/hero-img-2.png" alt="" />
                            </div>
                            <div className="hero-content text-center">
                                <h3 className="typed-text">
                                    {/* <div>Your one-stop shop for all <br /> your <span>Media buying needs</span></div> */}
                                    <div ref={el} />
                                </h3>
                            </div>
                            <div className="hero-form">
                                <form action>
                                    <div className="row gx-3">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="hero-form-input">
                                                <select name className="form-select has-ex-padding" id>
                                                    <option value selected>Pick a location</option>
                                                    <option value>Nigeria</option>
                                                    <option value>Bangladesh</option>
                                                    <option value>Nigeria</option>
                                                    <option value>Bangladesh</option>
                                                    <option value>Nigeria</option>
                                                    <option value>Bangladesh</option>
                                                </select>
                                                <div className="hero-form-input-icon">
                                                    <img src="assets/img/icons/i-1.svg" alt="" />
                                                </div>
                                                <div className="hero-form-input-chevron">
                                                    <img src="assets/img/icons/chevron-down.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="hero-form-input">
                                                <select name className="form-select" id>
                                                    <option value selected>Select Advert type </option>
                                                    <option value>Option 1</option>
                                                    <option value>Option 2</option>
                                                    <option value>Option 3</option>
                                                    <option value>Option 4</option>
                                                    <option value>Option 5</option>
                                                </select>
                                                <div className="hero-form-input-chevron">
                                                    <img src="assets/img/icons/chevron-down.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="hero-form-input">
                                                <input placeholder="Select a date" className="form-control pe-3" type="date" />
                                                <div className="hero-form-input-icon">
                                                    <img src="assets/img/icons/date.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="hero-form-submit">
                                                <Link to={'/dashboard'}>
                                                    <a className="common-btn">
                                                        Search
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Hero area end -------*/}





                {/*------- Partners area start -------*/}
                <section className="partners-area">
                    <div className="container ">
                        <div className="row align-items-center gx-3">
                            <div className="col-lg-3 col-md-4">
                                <div className="partners-area-title">
                                    <h4>Our Partners:</h4>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="partners-area-right partners-area-slider">
                                    <Slider {...settings}>
                                        <div>
                                            <img src={slide1} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide2} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide3} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide4} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide5} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide6} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide1} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide2} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide3} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide4} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide5} alt="" />
                                        </div>
                                        <div>
                                            <img src={slide6} alt="" />
                                        </div>


                                    </Slider>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                {/*------- Partners area end -------*/}
                {/*------- Common area start -------*/}
                <section className="common-area">
                    <div className="container">
                        <div className="common-content-title">
                            <p className="text-center"><b className="font-500">We Help Brands grow.</b> <br />
                                Over 100,000,000 Customers Reached. || Over $5m generated in sales. </p>
                        </div>
                        <div className="common-item">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="common-thumb">
                                        <img src="assets/img/thumb-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="common-content">
                                        <h3>Get Started with ShopMedia in 3 easy steps:</h3>
                                        <ul>
                                            <li><span><i className="fal fa-check" /></span> Search Media Type</li>
                                            <li><span><i className="fal fa-check" /></span> Search Location
                                            </li>
                                            <li><span><i className="fal fa-check" /></span> Negotiate/Book your selection</li>
                                        </ul>
                                        <p>…and hooray! You’re on your way to reaching your preferred audiences.</p>
                                        <div className="common-content-btn">
                                            <a href className="common-btn">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="common-item">
                            <div className="row align-items-center has-reverse">
                                <div className="col-md-6 col-lg-7">
                                    <div className="common-content p-0">
                                        <h3>Enjoy easy campaign management and planning with the use of ShopMedia.</h3>
                                        <p>ShopMedia is a powerful yet simple platform with a dedicated team that helps emerging
                                            and
                                            established brands reach their audiences and grow their brands faster.
                                        </p>
                                        <p>We’ve helped companies of all shapes and sizes grow faster by implementing on our
                                            platform a
                                            custom data-driven, performance-focused solution that aids ease of planning, buying
                                            and
                                            monitoring of Advert spaces from all over the country</p>
                                        <div className="common-content-btn pt-3">
                                            <a href className="common-btn">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="common-thumb">
                                        <img src="assets/img/thumb-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Common area end -------*/}
                {/*------- Company area start -------*/}
                <section className="company-area">
                    <div className="container">
                        <div className="sectiont-title">
                            <h3>You Are In Good Company</h3>
                        </div>
                        <div className="company-slider-wrapper owl-carousel no-dots no-arrows">
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-3.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-2.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-1.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-5.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-6.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-3.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-2.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-1.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-5.png" alt="" />
                            </div>
                            <div className="company-slide">
                                <img src="assets/img/logos/slide-6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Company area end -------*/}
            </main>
            {/*------- Main area end -------*/}
            {/*------- Newletter area start -------*/}
            <section className="newsletter-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="newsletter-title">
                                <h3>Subscribe to our newsletter</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="newsletter-form">
                                <form action>
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                    <button className="common-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*------- Newletter area end -------*/}
            {/*------- Footer area start -------*/}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a href><img src="assets/img/logos/footer-logo.png" alt="" /></a>
                                </div>
                                <div className="footer-contact">
                                    <a href="mailto:hi@shopmedia.ng">
                                        <span>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>hi@shopmedia.ng</a>
                                    <a href="tel:09023142336">
                                        <span>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </span>09023142336
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-item has-padding">
                                <h4>Our Firm</h4>
                                <ul>
                                    <li><a href>Find Listings</a></li>
                                    <li><a href>Term of Service</a></li>
                                    <li><a href>Privacy Policy </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-item ">
                                <h4>Manage All your Ads from one place. Download our App now</h4>
                                <div className="download-btns">
                                    <a href><img src="assets/img/icons/playstore.svg" alt="" /></a>
                                    <a href><img src="assets/img/icons/appstore.svg" alt="" /></a>
                                </div>
                                <div className="footer-social">
                                    <a href><img src="assets/img/logos/facebook.svg" alt="" /></a>
                                    <a href><img src="assets/img/logos/instagram.svg" alt="" /></a>
                                    <a href><img src="assets/img/logos/Vector.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        © 2022 ShopMedia. All Rights Reserved
                    </div>
                </div>
            </footer>
            {/*------- Footer area end -------*/}
        </div>
    )
}

export default HomePage;
