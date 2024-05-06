import { Dispatch, SetStateAction, createContext } from 'react';

type VisibleSection = {
	currentSection: string | any;
	setCurrentSection: Dispatch<SetStateAction<string>> | any;
};

export const VisibleSection = createContext<VisibleSection>({
	currentSection: 'Home',
	setCurrentSection: () => {},
});
