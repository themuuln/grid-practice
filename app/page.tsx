'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Aside, Header, Main, Navbar, Section } from './components';

type VisibleSection = {
	currentSection: string | any;
	setCurrentSection: Dispatch<SetStateAction<string>> | any;
};

export const VisibleSection = createContext<VisibleSection>({
	currentSection: 'Home',
	setCurrentSection: () => {},
});

export default function Home() {
	const [currentSection, setCurrentSection] = useState('Home');

	return (
		<main className="min-h-screen max-h-screen grid bg-secondary grid-cols-4 grid-rows-12 gap-[2px]">
			<VisibleSection.Provider value={{ currentSection, setCurrentSection }}>
				<Header />
				{currentSection === 'Home' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
						<Section />
					</>
				) : currentSection === 'Benefits' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
					</>
				) : currentSection === 'Solution' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
					</>
				) : currentSection === 'Opportunities' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
					</>
				) : currentSection === 'About' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
					</>
				) : currentSection === 'Contact' ? (
					<>
						<Main />
						<Aside />
						<Navbar />
					</>
				) : (
					<></>
				)}
			</VisibleSection.Provider>
		</main>
	);
}
