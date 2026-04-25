import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import config from '../config/config.js';

cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    console.log(localFilePath);
    
    try {
        if (!localFilePath) return null;
        // upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type: 'auto'});
        console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath, (err) => { 
            if(err) console.log("File delete error:", err);
        });
        return response;
    }
    catch (error) {
        console.error("Cloudinary Error:", error); // 👈 ADD THIS

        fs.unlinkSync(localFilePath, (err) => {
            if(err) console.log("File delete error:", err);
        }) // delete the local file if upload fails

        return null;
    }
};

export default uploadOnCloudinary;