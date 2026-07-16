import { DEFAULT_STORE_PRODUCTS, VEGETABLE_SHEET_CONFIG } from '../mock/storeData';

/**
 * Parses CSV text into an array of arrays.
 * Handles double quotes, escaped quotes, and commas inside quotes.
 */
function parseCSV(csv) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    const next = csv[i + 1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++; // skip newline for CRLF
      }
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }
  
  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  
  return lines;
}

/**
 * Fetches store inventory from Google Sheet CSV URL.
 * Falls back to default store mock data if there are issues.
 */
export async function fetchStoreProductsFromSheet(customSheetId = "") {
  const sheetId = customSheetId || VEGETABLE_SHEET_CONFIG.spreadsheetId;

  if (!sheetId) {
    throw new Error("No Google Spreadsheet ID was provided. Please configure it in your settings.");
  }

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&t=${new Date().getTime()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch products from Google Sheet. Status: ${response.status} (Unauthorized).\n` +
      `Ensure General Access is set to "Anyone with the link can view".`
    );
  }
  
  const csvText = await response.text();
  const parsedData = parseCSV(csvText);
  
  if (parsedData.length < 2) {
    throw new Error("No products found in Google Sheet.");
  }
  
  const headers = parsedData[0].map(h => {
    const clean = h.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
    if (clean === "productname" || clean === "title") return "name";
    if (clean === "desc" || clean === "description") return "description";
    if (clean === "imageurl" || clean === "imagelink" || clean === "image" || clean === "img") return "image";
    if (clean === "bestseller" || clean === "isbestseller" || clean === "popular") return "isbestseller";
    if (clean === "price" || clean === "rate") return "price";
    return clean;
  });
  
  const storeProducts = [];
  
  for (let i = 1; i < parsedData.length; i++) {
    const row = parsedData[i];
    if (row.length < headers.length) continue;
    
    const item = {};
    headers.forEach((header, index) => {
      const val = row[index] ? row[index].trim() : "";
      
      if (header === "sizes") {
        const sep = val.includes(";") ? ";" : ",";
        item.sizes = val ? val.split(sep).map(s => s.trim()).filter(Boolean) : ["Standard"];
      } else if (header === "prices") {
        const sep = val.includes(";") ? ";" : ",";
        item.prices = val 
          ? val.split(sep).map(s => parseFloat(s.trim())).filter(n => !isNaN(n)) 
          : [];
      } else if (header === "ingredients") {
        const sep = val.includes(";") ? ";" : ",";
        item.ingredients = val ? val.split(sep).map(s => s.trim()).filter(Boolean) : [];
      } else if (header === "isbestseller") {
        item.isBestseller = val.toLowerCase() === "true" || val === "1" || val.toLowerCase() === "yes";
      } else if (header === "price") {
        item.price = parseFloat(val) || 0;
      } else {
        item[header] = val;
      }
    });
    
    if (item.name) {
      if (!item.id) {
        item.id = item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      }
      // Ensure sizes and prices arrays align
      if (!item.prices || item.prices.length === 0) {
        item.prices = [item.price || 0];
      }
      if (!item.sizes || item.sizes.length !== item.prices.length) {
        item.sizes = item.prices.map((_, idx) => `Size ${idx + 1}`);
      }
      storeProducts.push(item);
    }
  }
  
  if (storeProducts.length === 0) {
    throw new Error("No valid products were parsed from your Google Sheet.");
  }
  
  return storeProducts;
}
