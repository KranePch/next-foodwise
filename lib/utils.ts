export function extractQuantity(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();

        if (priceText) return priceText.replace(/[^\d.gkglb]+(?!kg|g|lb)/g, '');
    }

    return '';
}