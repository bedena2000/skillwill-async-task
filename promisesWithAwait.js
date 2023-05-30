const mySetTimeout = (delay, callback) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(callback), delay);
	});
};

const delay = 2000;
const createTime = 3000;
const deliverTime = 2000;
const sellingTime = 1000;

const createToy = async (createTime) => {
	console.log('Tojina damzaddeba ' + createTime + ' wamshi');
	try {
		const result = await mySetTimeout(delay, () => console.log('satamasho gaketda'));
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('satamasho damzadda');
				resolve(result);
			}, createTime);
		});
	} catch(error) {
		console.log('dafiqsirda shecdoma');
		console.log(error);
	};
};

const deliverToy = async (deliverTime) => {
	try {
		const result = await createToy(createTime);
		console.log('tojinis motana schirdeba kidev ' + deliverTime  + ' wami' );
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('satamasho motanilia');
				resolve(result);
			}, deliverTime);
		});	
	} catch(error) {
		console.log('dafiqsirda shecdoma');
		console.log(error);
	} ;
};

const sellingToy = async (sellingTime) => {
	console.log('tojina gaiyideba ' + sellingTime + ' wamshi damzadebis shemdeg');
	try {
		const result = await createToy(createTime);
		setTimeout(() => console.log('satamasho gaiyida'), sellingTime);
	} catch (error) {
		console.log('dafiqsirda shecdoma');
		console.log(error);
	};
};




