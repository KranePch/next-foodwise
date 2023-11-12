import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: {type: String, require: true, unique: true},
    foodName: {type: String, require: true, unique: true},
    quantity: {type: String, require: true, unique: false},
    image: {type: String, require: true, unique: false},
    categoriesArray: [
        { type: String, required: true, unique: false }
    ],
    gradeNutrition: {type: String, require: true, unique: false},
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;

