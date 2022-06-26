import React, { useState } from 'react';


function Navigation() {
    const [className, setClassName] = useState('')

    const handleToggle = () => {
        if(className === ''){
            setClassName('active')
        }
        else if(className === 'active'){
            setClassName('')
        }
    }

    return (
        <div>
            <div className={`offcanvas-area ${className}`}>
                <div onClick={handleToggle} className="menu-close">
                    <i className="fal fa-times" />
                </div>
                <div className="offcanvas-menu">
                    <div className="main-menu">
                        <nav className="header-nav">
                            <ul className="m-0 p-0 list-unstyled ">
                                <li>
                                    <a href='/'>Home</a></li>
                                <li><a href='/dashboard'>Find Listing</a></li>
                            </ul>
                        </nav>
                        <div className="header-btns ">
                            <a href="/login" className="common-btn">Login</a>
                            <a href="/register" className="common-btn">Sign-up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas-overlay ${className}`} />
            {/*------- Offcanvas area end -------*/}
            {/*------- Header area start -------*/}
            <header className="header">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="header-logo">
                        <a href ='/'><img src="assets/img/logos/header-logo.png" alt="" /></a>
                    </div>
                    <div className="header-right d-flex align-items-center justify-content-end">
                        <nav className="header-nav">
                            <ul className="m-0 p-0 list-unstyled d-flex">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/dashboard'>Find Listing</a></li>
                            </ul>
                        </nav>
                        <div className="header-btns d-flex align-items-center">
                            <a href="/login" className="common-btn btn-bordered">Login</a>
                            <a href="/register" className="common-btn">Sign-up</a>
                        </div>
                    </div>
                    <div onClick={handleToggle} className="menu-open">
                        <i className="far fa-bars" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navigation;