export type API = {
	API: string;
	Description: string;
	Auth: string;
	HTTPS: boolean;
	Cors: string;
	Link: string;
	Category: string
}

type GetApisRes = {
	count: number;
	entries: API[]
}

export async function getApis(): Promise<GetApisRes> {
	const res = await fetch('https://api.publicapis.org/entries');
	const data = await res.json();
	return data;
}
