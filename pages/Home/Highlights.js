import React from 'react';

// import Images

// Import Components
import Search from '../../components/Search';

const Highlights = (props) => {
    return (
        <div className="highlights">
            <div className="left">
                <span>
                    <h3>THE UNIVERSITY FOR CREATIVE MINDS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </span>
            </div>
            <div className="middle">
                <h3>FIND THE RIGHT PROGRAMME</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex</p>
                <Search innerStyle={{
                    maxWidth: `450px`,
                    margin: `auto`,
                    display: `block`
                }} outerStyle={{
                    marginTop: `30px`
                }}/>
            </div>
            <div className="right" style={{
                backgroundImage: `url(static/highlight.jpg)`
            }}></div>



            <style jsx>{`
            .highlights{
                display: flex;
                height: 400px;
            }
            .highlights div{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .highlights .left{
                background: #000;
                padding: 5rem;
                padding-left: 30px;
                color: #fff;
                width: calc(50% - 200px);
                display: flex;
                align-items: flex-end;
            }
            .highlights .left span{
                max-width: 342px;
            }
            .highlights .left h3{
                font-size: 2.3rem;
            }
            .highlights .left p{
                font-size: 1.6rem;
                color: #808080;
            }
            .highlights .middle{
                width: calc(50% - 200px);
                padding: 5rem;
                color: #fff;
                background: rgba(93,136,255,1);
                background: -moz-linear-gradient(left, rgba(93,136,255,1) 0%, rgba(50,83,175,1) 100%);
                background: -webkit-gradient(left top, right top, color-stop(0%, rgba(93,136,255,1)), color-stop(100%, rgba(50,83,175,1)));
                background: -webkit-linear-gradient(left, rgba(93,136,255,1) 0%, rgba(50,83,175,1) 100%);
                background: -o-linear-gradient(left, rgba(93,136,255,1) 0%, rgba(50,83,175,1) 100%);
                background: -ms-linear-gradient(left, rgba(93,136,255,1) 0%, rgba(50,83,175,1) 100%);
                background: linear-gradient(to right, rgba(93,136,255,1) 0%, rgba(50,83,175,1) 100%);
            }
            .highlights .middle p{
                font-size: 1.6rem;
                color: #E2E2E2;
            }
            .highlights .middle h3{
                font-size: 2rem;
            }
            .highlights .middle span{
                position: relative;
            }
            .highlights .middle span i{
                position: absolute;
                padding: 14px;
                padding-left: 16px;
                left: 0;
                color: #747474;
                font-size: 1.75rem;
            }
            .highlights .middle span input{
                width: 100%;
                padding: 14px;
                padding-left: 20%;
                border-radius: 50px;
                border: none;
                font-size: 1.6rem;
            }
            .highlights .middle span input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #ADADAD;
                opacity: 1; /* Firefox */
            }
            .highlights .middle span input:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #ADADAD;
            }
            .highlights .middle span input::-ms-input-placeholder { /* Microsoft Edge */
                color: #ADADAD;
            }
            .highlights .right{
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                width: 400px;
                height: 100%;
            }
            `}</style>
        </div>
    );
}

export default Highlights;