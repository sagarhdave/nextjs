import React, { Component } from 'react';
import SectionName from './SectionName';
import Wrapper from './Wrapper';

class Facilities extends Component {
    render() {
        {/* <Facilities/> */ }
        let facilitiesData = [
            { title: 'Library', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
            { title: 'Library 1', content: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
            { title: 'Library 2', content: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/static/test-img.png' },
        ];

        let FacilitiesItem = facilitiesData.map(v => {
            return (
                <div class="mySlides fade">
                    <img src={v.image} />
                    <div class="text">
                        {v.content}
                    </div>
                </div>
            );
        });

        return (
            <div class="facilities-class">
                <Wrapper>
                    <SectionName name={'Facilities'} />
                    {FacilitiesItem}
                </Wrapper>

                <style jsx>{`


            `}</style>
            </div>
        );
    }
}

export default Facilities;