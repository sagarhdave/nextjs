import React, { Component } from 'react';
import SectionName from './SectionName';
import Wrapper from './Wrapper';

let facilitiesData = [
    { title: 'Library', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
    { title: 'Library 1', content: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
    { title: 'Library 2', content: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
];

function SlideItem(props) {
    return (
        <div className="item-slide">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
        </div>
    );
}

const Indicators = (props) => {
    const listIndicators = facilitiesData.map((item, index) =>
        <li
            key={index}
            className={props.currentSlide === index ? 'active' : ''}
            onClick={() => props.changeSlide(index)}
        >{index + 1}</li>
    );
    return (
        <ul className="indicators">
            {listIndicators}
        </ul>
    );
};


class Facilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideshow: props.slide,
            slideIndex: 0
        };
        this.currentIndex = 0;
        this.pause = false;
    }

    componentDidMount() {
        var that = this;
        this.timeout = setTimeout(function () {
            that.goTo('auto')
        }, 3000);
    }

    componentDidUpdate() {
        var that = this;
        if (this.pause === true) {
            clearInterval(this.timeout);
            this.timePause = setTimeout(function () {
                clearInterval(this.timePause);
            }, 8000);
            this.pause = false;
        }
        this.timeout = setTimeout(function () {
            that.goTo('auto')
        }, 3000);

    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    goTo = (direction) => {
        let index = 0;
        switch (direction) {
            case 'auto':
                index = this.currentIndex + 1;
                this.currentIndex = index >= facilitiesData.length ? 0 : index;
                break;
            case 'prev':
                index = this.currentIndex - 1;
                this.currentIndex = index < 0 ? facilitiesData.length - 1 : index;
                this.pause = true;
                break;
            case 'next':
                index = this.currentIndex + 1;
                this.currentIndex = index >= facilitiesData.length ? 0 : index;
                this.pause = true;
                break;
            default:
                this.currentIndex = direction;
                this.pause = true;
                break;
        }
        console.log('pause:', this.pause);
        this.setState({
            slideIndex: this.currentIndex,
            slideshow: facilitiesData[this.currentIndex]
        });

    };

    render() {
        return (
            <div class="facilities-class">
                <Wrapper>
                    <SectionName name={'Facilities'} />
                    <div className="slideshow-simple">
                        <SlideItem
                            title={this.state.slideshow.title}
                            content={this.state.slideshow.content}
                        />

                        <div className="wrap-control">
                            <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>
                            <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>
                        </div>
                    </div>
                    <div className="slideshow-simple">
                        <img src={this.state.slideshow.image} />
                    </div>
                </Wrapper>
                <style jsx>
                    {`
                        .slideshow-simple {
                            width: 50%;
                            float: left;
                            margin: 0 auto;
                            text-align: left;
                        }
                        .item-slide {
                            padding: 80px 0;
                            width: 300px;  
                        }

                        .item-slide h1 {
                            text-transform: uppercase;
                        }
                        wrap-control{width:300px}
                        .wrap-control .btn {
                                margin: 0 5px;
                                width: 80px;
                                cursor: pointer;    
                        }
                        .clearfix:after{
                            clear: both;
                            content: ".";
                            display: block;
                            width: 0px;
                            height: 0px;
                        }
                        h2{
                            color: #585858;
                            font-weight: normal;
                            font-size: 16px;
                        }

                        h1{
                            font-size: 16px;
                        }
                        .indicators {
                            padding: 0;
                            list-style: none;
                            text-align: center;
                        }
                        li {
                            cursor: pointer;
                            display: inline-block;
                            margin: 0 10px;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            border: 2px solid blue;
                            background: white;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Facilities;