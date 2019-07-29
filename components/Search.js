import React from 'react';

const Search = (props) => {
    return (
        <span style={props.outerStyle}>
            <span style={props.innerStyle}>
                <input type="text" placeholder="Search for a programme"/>
                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
        </span>
    );
}

export default Search;