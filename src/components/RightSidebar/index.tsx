import {useRecoilValue} from 'recoil';
import {selectedApiAtom} from '../../recoil/api';
import { API } from '../../services/api';

function RightSidebar() {
	const selectedApi = useRecoilValue<API | null>(selectedApiAtom);

	if (!selectedApi) return null;

	return (
		<div>
			{Object.keys(selectedApi).map((key) => (
				<h4 key={key}>{`${key}: ${selectedApi[key as keyof API]}`}</h4>
			))}
		</div>
	);
}

export default RightSidebar;
