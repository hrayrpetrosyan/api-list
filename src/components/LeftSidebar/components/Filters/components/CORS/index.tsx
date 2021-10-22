import React, {useMemo} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apisAtom, corsFilterAtom } from '../../../../../../recoil/api';

function CorsFilter() {
	const apis = useRecoilValue(apisAtom);
	const [corsFilter, setCorsFilter] = useRecoilState(corsFilterAtom);

	const options = useMemo(() => {
		const optionsArr = apis.map((api) => {
			return api.Cors;
		});
		return Array.from(new Set(optionsArr));
	}, [corsFilter, apis]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCorsFilter(e.target.value);
	};

	return (
		<>
			<label htmlFor="cors">CORS :</label>
			{options.map((opt) => (
				<div key={opt}>
					<input type="radio" onChange={handleChange} name="cors" value={opt} />
					<label htmlFor={opt}>{opt}</label><br></br>
				</div>
			))
			}
		</>
	);
}

export default CorsFilter;
