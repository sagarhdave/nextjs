import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {
    render() {
        let links = [
            { label: 'Home', link: '/about' },
            { label: 'Academic', link: '../secondPage' },
            { label: 'Admission', link: '#admission' },
            { label: 'Student Life', link: '#studentLife' },
            { label: 'About', link: '#about' }
        ];

         let navItem = links.map(v => {
            return (
                <Link href={v.link}>
                    <a>{v.label}</a>
                </Link>
            );
        });

        return (
            <header>
                <div className="contentBox">
                    <div className="nav-left">
                        <div className="logo">
                            <img src="/static/logo.png" alt="Limkokwing-Logo" />
                        </div>
                    <div className="menu">
                        {navItem}
                    </div>
                    </div>

                    <div className="nav-right">
                        <div className="searchIcon right-item">
                            <a href="#a">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                        <div className="location right-item">
                            <div className="locationDropdown">
                                <span style={{
                                    backgroundImage: `url(/static/malaysia-flag.png)`,
                                    backgroundRepeat: `no-repeat`
                                }} className="flag"></span>
                                <p>Malaysia</p>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="profileIcon right-item">
                            <a href="#a">
                                <i className="fa fa-user-circle-o"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <style  jsx>{`

                header {
                    top: 0;
                    height: 7rem;
                    background-color: #000;
                    width: 100%;
                    color: #D1D1D1;
                    position:fixed;
                        z-index: 999;

                }
                
                header .nav-left,
                header .nav-right {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    height: 100%;
                }
                
                header .nav-left {
                    float: left;
                }
                
                header .nav-right {
                    float: right;
                }
                
                header .contentBox {
                    height: 100%;
                    max-width: 1250px;
                    padding: 0 3rem;
                    margin: auto;
                }
                

                
                header .nav-right i {
                    color: #fff;
                    font-size: 2.2rem;
                    color: #D1D1D1;
                }
                
                header .locationDropdown {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    border: 1px solid #242424;
                    border-radius: 5rem;
                    padding: 1rem;
                    cursor: pointer;
                }
                
                header .locationDropdown:hover {
                    border: 1px solid #949494;
                }
                
                header .locationDropdown .flag {
                    /* background: url('../img/malaysia-flag.png') no-repeat; */
                    background-position: center;
                    background-size: cover;
                    width: 2.4rem;
                    height: 2.4rem;
                    border-radius: 50%;
                }
                
                header .locationDropdown p {
                    margin: 0 1rem 0 .6rem;
                    font-size: 1.4rem;
                }
                
                header .locationDropdown i {
                    font-size: 2rem;
                }
                
                header .right-item {
                    margin-left: 4rem;
                }
                
                header .searchIcon i {
                    font-size: 1.8rem;
                    color: #D1D1D1;
                }
                `}</style>

                <style global jsx>{`
                                header .menu {
                    margin-left: 3rem;
                    height: 100%;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                }
                
                header .menu a {
                    text-decoration: none;
                    height: 100%;
                    padding: 0 1.4rem;
                    font-size: 1.4rem;
                    font-weight: 500;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    color: inherit;
                }
                
                header .menu a:hover {
                    color: #fff;
                }
                
                     .menu .active {
                    background: #1F1F1F;
                }`}</style>
            </header>
        );
    }
}

export default Navbar;