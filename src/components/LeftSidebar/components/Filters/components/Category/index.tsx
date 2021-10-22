import {useMemo} from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryFilterAtom, apisAtom } from '../../../../../../recoil/api';

function Category() {
	const setCategoryFilter = useSetRecoilState(categoryFilterAtom);
	const apis = useRecoilValue(apisAtom);

	const options = useMemo(() => {
		const optionsArr = apis.map((api) => {
			return api.Category;
		});
		return Array.from(new Set(optionsArr));
	}, [apis]);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategoryFilter(e.target.value);
	};

	return (
		<div>
			<label htmlFor="category">Category :</label>
			<select onChange={handleChange} name="category">
				<option value="">Choose Category</option>
				{options.map((opt) => (
					<option key={opt} value={opt}>{opt}</option>
				))}
			</select>
		</div>
	);
}

export default Category;
