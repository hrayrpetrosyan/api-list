
import { useSetRecoilState } from 'recoil';
import { corsFilterAtom, categoryFilterAtom, searchApiAtom } from '../../../../recoil/api';
import Category from './components/Category';
import CorsFilter from './components/CORS';
import Search from './components/Search';

function Filters() {

	const setCorsFilter = useSetRecoilState(corsFilterAtom);
	const setCategoryFilter = useSetRecoilState(categoryFilterAtom);
	const setSearchApi = useSetRecoilState(searchApiAtom);

	const handleClick = () => {
		setCorsFilter('');
		setCategoryFilter('');
		setSearchApi('');
	};

	return (
		<div>
			{/* Select Category */}
			<Category />

			{/* Select CORS */}
			<CorsFilter />

			<Search />

			<button onClick={handleClick}>Reset filters</button>
		</div>
	);
}

export default Filters;
