const multer = require('multer'); // IMPORT LIBRARY YANG SUDAH DI INSTALL
const util   = require('util');
const path   = require('path');

// MERUJUK PADA DIREKTORI ROOT PROJEK
const __basedir   = path.resolve(); 

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    }else{
        cb('please upload only image.', false);
    }
}

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        // TENTUKAN LETAK FILE AKAN DISIMPAN SETELAH DI UPLOAD
        cb(null, __basedir + '/storage/upload') 
    },
    filename: (req, file, cb) => {
        // PENAMAAN FILE DI AMBIL DARI WAKTU DAN NAMA FILE
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const uploadImage = multer({
    storage: storage,
    fileFilter: imageFilter
}).array('files', 5) // KITA TENTUKAN IMAGE BISA DI UPLOAD SEBANYAK 5

let uploadFile = util.promisify(uploadImage);

// EXPORT FUNGSI YANG DI BUAT
// AGAR BISA DIGUNAKAN DI FILE YANG LAIN
module.exports = {
    uploadFile,
    __basedir
}