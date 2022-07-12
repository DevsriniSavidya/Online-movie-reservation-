const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		await QRCode.toFile('./QRcode.png', text);
	} catch(err){
		console.log(err);
	}
}

generateQR("https://github.com/DevsriniSavidya/Online-movie-reservation-");