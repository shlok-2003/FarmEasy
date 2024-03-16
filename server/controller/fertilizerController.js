const Fertilizer = require("../model/fertilizerModal");

const fs = require("fs");

const multer = require("multer");
const uploadMiddleware = multer({ dest: "./uploads/" });

// UPLOAD FILE -
exports.uploadFile = uploadMiddleware.single("prodImage");
exports.postProduct = async (req, res, next) => {
    try {
        console.log("REQ FILE :", req.file);

        const { originalname, path } = req.file;
        const ext = originalname.split(".")[1];

        console.log(ext);

        const newPath = path + "." + ext;
        fs.renameSync(path, newPath);

        // 1) Check if the user has all the fields filled -
        const {
            prodName,
            prodImage = newPath,
            prodPrice,
            prodDescription,
            prodQuantity,
            category
        } = req.body;

        console.log("REQ BODY", req.body);

        // 3) If above both checks are passed, then start the process of creating new user :
        const fertilizers = await Fertilizer.create({
            prodName: req.body.prodName,
            prodImage: (req.body.prodImage = newPath),
            category: req.body.category,
            prodDescription: req.body.prodDescription,
            prodPrice: req.body.prodPrice,
            prodQuantity: req.body.prodQuantity
        });

        console.log("FERTILIZERS : ", fertilizers);

        await fertilizers.save();
        res.status(200).json(fertilizers); // Send only the names of artists in the response
    } catch (e) {
        console.log("ERROR : ", e);
    }
};

exports.getAllFertilizers = async (req, res) => {
    try {
        // const products = await Product.find({}).exec();
        const fertilizers = await Fertilizer.find({}).exec();

        res.status(200).json({ NoOfFertilizers: fertilizers.length, fertilizers});
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}