const data = ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'];
const Aside = () => {
	return (
		<div className="col-span-1 row-span-6 bg-secondary text-white grid grid-cols-4 grid-rows-6">
			{data?.map((item, index) => {
				return (
					<div key={index} className="col-span-6 row-span-1">
						<div className="flex items-center h-full">{item}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Aside;
