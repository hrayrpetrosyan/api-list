import {useRef, useEffect, useState} from 'react';
import { useRecoilState } from 'recoil';
import { searchApiAtom } from '../../../../../../recoil/api';

function Search() {
	const [search, setSearch] = useRecoilState<string>(searchApiAtom);
	const [searchType, setSearchType] = useState<string>('');
	const debounceRef = useRef<number>();

	useEffect(() => {
		if (!search) setSearchType(search);
	}, [search]);

	useEffect(() => () => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchType(e.target.value);
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = window.setTimeout(() => {
			setSearch(e.target.value);
		}, 500);
	};

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input type="text" name="search" onChange={handleChange} value={searchType} />
		</div>
	);
}

export default Search;
