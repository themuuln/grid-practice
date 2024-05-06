'use client';
import { useState } from 'react';
import {
	Aside,
	ComingSoon,
	Contact,
	Header,
	Main,
	Navbar,
	Section,
} from './components';
import { VisibleSection } from './context/ui/VisibleSection';

const FixedComponents = () => {
	return (
		<div className="grid grid-cols-1 grid-rows-12 col-span-1 row-span-12">
			<Header />
			<Navbar />
		</div>
	);
};

export default function Home() {
	const [currentSection, setCurrentSection] = useState('Home');
	return (
		<main className="min-h-screen max-h-screen grid bg-secondary grid-cols-4 grid-rows-12 gap-[2px]">
			<VisibleSection.Provider value={{ currentSection, setCurrentSection }}>
				<FixedComponents />
				{currentSection === 'Home' ? (
					<>
						<Main />
						<Aside />
						<Section />
					</>
				) : currentSection === 'Benefits' ? (
					<ComingSoon />
				) : currentSection === 'Solution' ? (
					<ComingSoon />
				) : currentSection === 'Opportunities' ? (
					<ComingSoon />
				) : currentSection === 'About Us' ? (
					<ComingSoon />
				) : currentSection === 'Contact Us' ? (
					<>
						<Contact />
					</>
				) : (
					<></>
				)}
			</VisibleSection.Provider>
		</main>
	);
}
