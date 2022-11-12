const fs = require('fs');

// IMPORT FUNGSI UPLOAD FILE
const { uploadFile } = require('../services/upload');

exports.upload = async (req, res) => {
    try {
        
        await uploadFile(req, res)

        res.status(201).json({
            message: 'upload files successfully'
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}