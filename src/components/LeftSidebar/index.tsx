import ApiList from './components/ApiList';
import Filters from './components/Filters';

function LeftSidebar() {
	return (
		<div>
			<Filters />
			<ApiList />
		</div>
	);
}

export default LeftSidebar;
