import NavButton from './NavButton';
import buttonData from './buttonData';

const Navbar = () => {
	return (
		<div className="col-span-1 row-span-6 grid grid-cols-4 grid-rows-6 bg-primary">
			{buttonData.map((item, index) => {
				return <NavButton item={item} key={index} />;
			})}
		</div>
	);
};

export default Navbar;
