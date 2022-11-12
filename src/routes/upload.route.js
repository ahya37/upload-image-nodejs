// IMPORT CONTROLLER UPLOAD
const controller = require('../controllers/upload.controller')

module.exports = (app) => {
    app.post('/api/upload', controller.upload);
}