const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "df1mpdaa1",
  api_key: "835142159829845",
  api_secret: "vVyCumpHhZdbxbEdmhOdw8tPOAI",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

// Example usage
const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
