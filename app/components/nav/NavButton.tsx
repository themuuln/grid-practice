'use client';
import { VisibleSection } from '@/app/page';
import { useContext, useEffect, useState } from 'react';

const NavButton = ({ item }: { item: any }) => {
	const [isHovering, setIsHovering] = useState(false);
	const { currentSection, setCurrentSection } = useContext(VisibleSection);
	return (
		<div className={`col-span-6 px-2 row-span-1`}>
			<button
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				onClick={() => {
					setCurrentSection(item?.title);
				}}
				className={`w-full h-full border-b-[2px] ${
					currentSection === item?.title ? 'border-accent' : 'border-secondary'
				} transition-all duration-150 flex items-center justify-start`}
			>
				<p
					className={`
          ${currentSection === item?.title ? 'text-accent' : 'text-white'}
          ${
						isHovering ? 'translate-x-2' : ''
					} transition-transform text-3xl duration-150`}
				>
					• {item?.title}
				</p>
			</button>
		</div>
	);
};

export default NavButton;
