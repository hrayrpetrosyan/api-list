import { atom } from 'recoil';
import {API} from '../services/api';

export const apisAtom = atom<API[]>({
	key: 'API_LIST',
	default: []
});

export const categoryFilterAtom = atom<string>({
	key: 'CATEGORY_FILTER',
	default: ''
});

export const corsFilterAtom = atom<string>({
	key: 'CORS_FILTER',
	default: ''
});

export const selectedApiAtom = atom<API | null>({
	key: 'SELECTED_API',
	default: null
});

export const searchApiAtom = atom<string>({
	key: 'SEARCH_API',
	default: ''
});
