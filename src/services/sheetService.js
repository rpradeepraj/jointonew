import { DEFAULT_PRODUCTS, GOOGLE_SHEET_CONFIG } from '../mock/productsData';

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
 * Fetches products from a Google Sheet CSV URL.
 * Falls back to default mock data if there are issues.
 */
export async function fetchProductsFromSheet(customSheetId = "") {
  const sheetId = customSheetId || GOOGLE_SHEET_CONFIG.spreadsheetId;
  const isEnabled = customSheetId || GOOGLE_SHEET_CONFIG.enabled;

  if (!isEnabled || !sheetId) {
    console.log("Google Sheets integration is disabled or Sheet ID is missing. Using default local data.");
    return DEFAULT_PRODUCTS;
  }

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&t=${new Date().getTime()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data. Status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const parsedData = parseCSV(csvText);
    
    if (parsedData.length < 2) {
      throw new Error("No data or headers found in Google Sheet.");
    }
    
    // Map headers to object keys
    const headers = parsedData[0].map(h => h.trim().toLowerCase());
    const products = [];
    
    for (let i = 1; i < parsedData.length; i++) {
      const row = parsedData[i];
      if (row.length < headers.length) continue;
      
      const item = {};
      headers.forEach((header, index) => {
        const val = row[index] ? row[index].trim() : "";
        
        if (header === "images" || header === "tags" || header === "features") {
          // Support semicolon or comma delimited strings for lists
          const separator = val.includes(";") ? ";" : ",";
          item[header] = val
            ? val.split(separator).map(s => s.trim()).filter(Boolean)
            : [];
        } else if (header === "isfeatured") {
          item.isFeatured = val.toLowerCase() === "true" || val === "1" || val.toLowerCase() === "yes";
        } else {
          item[header] = val;
        }
      });
      
      // Ensure basic keys are present
      if (item.title) {
        // Fallback for ID if empty
        if (!item.id) {
          item.id = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        }
        products.push(item);
      }
    }
    
    if (products.length === 0) {
      throw new Error("Parsed 0 valid products from Google Sheet.");
    }
    
    return products;
  } catch (error) {
    console.warn("Failed to fetch products from Google Sheet. Falling back to local data.", error);
    return DEFAULT_PRODUCTS;
  }
}
