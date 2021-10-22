import { useMemo, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { apisAtom, categoryFilterAtom, corsFilterAtom, searchApiAtom, selectedApiAtom } from '../../../../recoil/api';
import { getApis, API } from '../../../../services/api';
import './styles.css';

function ApiList() {
	const [apis, setApis] = useRecoilState<API[]>(apisAtom);
	const setSelectedAPi = useSetRecoilState(selectedApiAtom);
	const categoryFilter = useRecoilValue(categoryFilterAtom);
	const corsFilter = useRecoilValue(corsFilterAtom);
	const search = useRecoilValue(searchApiAtom);

	useEffect(() => {
		const runGetApis = async () => {
			try {
				const data = await getApis();
				setApis(data.entries);
			} catch (error) {
				alert(error);
			}
			
		};
		runGetApis();
	}, []);

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
		e.stopPropagation();
		const apisClone = [...apis];
		const index = apisClone.findIndex(api => api.API === name);
		apisClone.splice(index,1);
		setApis(apisClone);
	};

	const handleClick = (name: string) => {
		const selected = apis.find(api => api.API === name);
		if (!selected) return;
		setSelectedAPi(selected);
	};

	const apisFiltered = useMemo(() => {
		return apis.filter((api) => {
			let isCategory = true;
			let isCors = true;
			let isSearch = true;
			if (search) {
				isSearch = api.API.toLowerCase().startsWith(search.toLowerCase());
			}
			if (categoryFilter) {
				isCategory = api.Category === categoryFilter;
			}
			if (corsFilter) {
				isCors = api.Cors === corsFilter;
			}
			return isCors && isCategory && isSearch;
		});
	}, [apis, categoryFilter, corsFilter, search]);

	return (
		<div>
			{
				apisFiltered.map((api, i) => (
					<div key={i} className="api">
						<div onClick={() => handleClick(api.API)}><h3>{api.API}</h3></div>
						<div><h3>{api.Category}</h3></div>
						<div><button onClick={(e) => handleDelete(e, api.API)}>Delete</button></div>
					</div>
				))
			}
		</div>
	);
}

export default ApiList;
