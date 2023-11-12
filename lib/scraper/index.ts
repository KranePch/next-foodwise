import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractQuantity } from '../utils';

export async function scrapeOpenFoodProduct(url: string) {
    if (!url) return;

    try {
      // Make an HTTP request to the website
      const response = await axios.get(url);
  
      // Load the HTML content into Cheerio
      const $ = cheerio.load(response.data);

      const foodName = $('h2.title-1').text().trim();
      const quantity = extractQuantity(
        $('#field_quantity #field_quantity_value'),
        $('span.field_value')
        );
      const imageUrl = $('#og_image').attr('src') || '';
      const categories = $('#field_categories_value').text().trim();
      const categoriesArray = categories.split(', ');

      const nutritionDrill = $('li[class="accordian-navigation"]');
      // Iterate over the selected elements and find the h4 element with class "grade_unknown_title"
      // nutritionDrill.each((index, element) => {
      //   const gradeText = $(element).find('h4.grade_unknown_title').text();
      //   // console.log(gradeText.trim()); // trim to remove leading/trailing spaces
      // });

      // const gradeNutrition = $('li.accordion-navigation h4.grade_unknown_title').text().trim();
      const gradeNutrition = '';
    
      const data = {
        url,
        foodName,
        quantity,
        imageUrl,
        categoriesArray,
        gradeNutrition
      }
      // console.log(data);
      return data
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }