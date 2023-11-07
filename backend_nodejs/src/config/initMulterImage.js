const multer = require('multer')

const DIR = 'public/img';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const num = Date.now()
        const fileName = num.toString() +'_'+ file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
})

const uploadImage = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }

})

module.exports = uploadImage