const headerData = ['speed', 'cost friendly', 'speed'];
const contentData = ['', '', ''];

const Header = ({ text }: { text: string }) => {
	return (
		<div className="col-span-1 flex items-center justify-center row-span-1 uppercase bg-primary">
			<p className="text-center text-white text-3xl uppercase">{text}</p>
		</div>
	);
};

const Content = ({ text }: { text: string }) => {
	return (
		<div className="col-span-1 row-span-5 uppercase bg-primary">{text}</div>
	);
};

const Section = () => {
	return (
		<div className="col-span-3 row-span-6 grid grid-cols-3 grid-rows-6 gap-[2px] bg-secondary">
			{headerData.map((item, index) => {
				return <Header text={item} key={index} />;
			})}
			{contentData.map((item, index) => {
				return <Content text={item} key={index} />;
			})}
		</div>
	);
};

export default Section;
