import React from 'react';
import Category from './components/Category';
import CorsFilter from './components/CORS';
import Search from './components/Search';

function Filters() {
	return (
		<div>
			{/* Select Category */}
			<Category />

			{/* Select CORS */}
			<CorsFilter />

			<Search />
		</div>
	);
}

export default Filters;
