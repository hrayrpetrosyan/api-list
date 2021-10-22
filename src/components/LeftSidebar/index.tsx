import { useSetRecoilState } from 'recoil';
import { corsFilterAtom, categoryFilterAtom, searchApiAtom } from '../../recoil/api';
import ApiList from './components/ApiList';
import Filters from './components/Filters';

function LeftSidebar() {
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
			<Filters />
			<ApiList />
			<button onClick={handleClick}>Reset filters</button>
		</div>
	);
}

export default LeftSidebar;
