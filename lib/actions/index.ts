"use server"

import Product from "../models/product.model";
import { revalidatePath } from "next/cache";
import { scrapeOpenFoodProduct } from "../scraper";
import { connectToDB } from "../scraper/mongoose";

export async function scrapeAndStoreProduct(productUrl: string) {
    
    if (!productUrl) return;
    try {
        connectToDB();

        const scrapedProduct = await scrapeOpenFoodProduct(productUrl);

        if (!scrapedProduct) return;

        let product = scrapedProduct;

        const newProduct = await Product.findOneAndUpdate(
            { url: scrapedProduct.url },
            product,
            { upsert: true, new: true }
          );
      
          revalidatePath(`/products/${newProduct._id}`);
          
    } catch (error: any) {
        throw new Error(`Faild: ${error.message}`)
    }
}