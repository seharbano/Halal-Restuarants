import type { Restaurant } from "../types/restaurant";

// 🔥 helper to safely convert lat/lng
const parseCoord = (val: string) => {
  return Number(
    val?.replace(",", ".").replace(/[^\d.-]/g, "")
  ) || 0;
};

export function sheetParser(csvText: string): Restaurant[] {
  const rows = csvText
    .split("\n")
    .filter((row) => row.trim().length > 0);

  const headers = rows[0].split(",");

  return rows.slice(1).map((row, index) => {
    const values =
      row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];

    const obj: Record<string, string> = {};

    headers.forEach((header, i) => {
      obj[header.trim()] =
        values[i]?.replace(/"/g, "").trim() || "";
    });

    return {
      id: index + 1,
      name: obj.name || "",
      address: obj.address || "",
      city: obj.city || "",

      // ✅ FIXED LAT/LNG (NO NaN ANYMORE)
      latitude: parseCoord(obj.latitude),
      longitude: parseCoord(obj.longitude),
image: obj.image || "",
      cuisine: obj.cuisine || "",
      halalStatus: obj.halal_status || "",

   phone: obj.phone || "",
website: obj.website || "",
hours: obj.hours || "",
    };
  });
}