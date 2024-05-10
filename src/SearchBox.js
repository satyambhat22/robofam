import React from 'react';

const SearchBox = ({seachfield, searchChange}) => {
	return (
       <div> 


       <input className = 'tc bg-lightest-blue shadow-5 b3 pa3 ma2 mb3 ba b--light-green'

       type = 'search' 
       placeholder = 'Search'
       onChange = {searchChange}

       />


       </div>


		)
}

export default SearchBox;