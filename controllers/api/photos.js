const Photo = require('../../models/photo');

async function getPhotos(req, res, next) {
    try {
        const photos = await Photo.find({});
        photos.sort((a, b) => a.createdAt<b.createdAt ? 1 : -1)
        res.status(200).json(photos);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    getPhotos
}