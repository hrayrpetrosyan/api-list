import {useRef, useEffect} from 'react';
import { useSetRecoilState } from 'recoil';
import { searchApiAtom } from '../../../../../../recoil/api';

function Search() {
	const setSearch = useSetRecoilState(searchApiAtom);
	const debounceRef = useRef<number>();

	useEffect(() => () => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = window.setTimeout(() => {
			setSearch(e.target.value);
		}, 500);
	};

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input type="text" name="search" onChange={handleChange} />
		</div>
	);
}

export default Search;
