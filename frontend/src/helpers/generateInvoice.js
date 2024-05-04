import jsPDFInvoiceTemplate, { OutputType, jsPDF } from 'jspdf-invoice-template';

const generateInvoice = (products, user) => {
	const date = new Date();
	console.log('se');
	// const props = {
	// 	outputType: OutputType.Save,
	// 	fileName: 'Invoice 2024',
	// 	orientationLandscape: false,
	// 	logo: {
	// 		src: 'https://raw.githubusercontent.com/TahiaHossain/HnH/main/frontend/public/assets/icons/food.png',
	// 		width: 53.33, //aspect ratio = width/height
	// 		height: 26.66,
	// 	},
	// 	business: {
	// 		name: 'HnH Foods',
	// 		address: '23/1, Link Road, Gulshan-1, Dhaka-1212, Bangladesh',
	// 		phone: '(+880 17312421) ',
	// 		email: 'email@example.com',
	// 		email_1: 'info@example.al',
	// 		website: 'www.example.al',
	// 	},
	// 	// contact: {
	// 	// 	label: 'Invoice issued for:',
	// 	// 	name: user.name,
	// 	// 	address: user.address,
	// 	// 	phone: user.phone ? user.phone : 'N/A',
	// 	// 	email: user.email,
	// 	// 	otherInfo: 'www.website.al',
	// 	// },
	// 	contact: {
	// 		label: 'Invoice issued for:',
	// 		name: 'Client Name',
	// 		address: 'Albania, Tirane, Astir',
	// 		phone: '(+355) 069 22 22 222',
	// 		email: 'client@website.al',
	// 		otherInfo: 'www.website.al',
	// 	},
	// 	invoice: {
	// 		label: 'Invoice #: ',
	// 		invTotalLabel: 'Total:',
	// 		num: 19,
	// 		invDate: `Payment Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
	// 		invGenDate: `Invoice Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
	// 		header: ['#', 'Description', 'Price', 'Quantity', 'Unit', 'Total'],
	// 		headerBorder: false,
	// 		tableBodyBorder: false,
	// 		table: Array.from(Array(10), (item, index) => ({
	// 			num: index + 1,
	// 			desc: 'There are many variations ',
	// 			price: 200.5,
	// 			quantity: 4.5,
	// 			unit: 'm2',
	// 			total: 400.5,
	// 		})),
	// 		// invTotal: products.reduce((acc, product) => acc + product.price * product.quantity, 0),
	// 		invTotal: '145,250.50',
	// 		invCurrency: 'ALL',
	// 		invDescLabel: 'Invoice Note',
	// 		invDesc:
	// 			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
	// 	},
	// 	footer: {
	// 		text: 'The invoice is created on a computer and is valid without the signature and stamp.',
	// 	},
	// 	pageEnable: true,
	// 	pageLabel: 'Page ',
	// };
	var props = {
		outputType: OutputType.Save,
		fileName: 'Invoice 2021',
		orientationLandscape: false,
		logo: {
			src: 'https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png',
			width: 53.33, //aspect ratio = width/height
			height: 26.66,
		},
		business: {
			name: 'Business Name',
			address: 'Albania, Tirane ish-Dogana, Durres 2001',
			phone: '(+355) 069 11 11 111',
			email: 'email@example.com',
			email_1: 'info@example.al',
			website: 'www.example.al',
		},
		contact: {
			label: 'Invoice issued for:',
			name: 'Client Name',
			address: 'Albania, Tirane, Astir',
			phone: '(+355) 069 22 22 222',
			email: 'client@website.al',
			otherInfo: 'www.website.al',
		},
		invoice: {
			label: 'Invoice #: ',
			invTotalLabel: 'Total:',
			num: 19,
			invDate: 'Payment Date: 01/01/2021 18:12',
			invGenDate: 'Invoice Date: 02/02/2021 10:17',
			header: ['#', 'Description', 'Price', 'Quantity', 'Unit', 'Total'],
			headerBorder: false,
			tableBodyBorder: false,
			table: [
				{
					num: 1,
					desc: 'There are many variations ',
					price: 200.5,
					quantity: 4.5,
					unit: 'm2',
					total: 400.5,
				},
			],
			invTotal: '145,250.50',
			invCurrency: 'ALL',
			invDescLabel: 'Invoice Note',
			invDesc:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
		},
		footer: {
			text: 'The invoice is created on a computer and is valid without the signature and stamp.',
		},
		pageEnable: true,
		pageLabel: 'Page ',
	};
	const pdfObject = jsPDFInvoiceTemplate(props);
	pdfObject.save();
	return pdfObject;
};

export default generateInvoice;
