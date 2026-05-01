import { useEffect, useState } from "react";
import { sheetParser } from "../utilis/sheetParser";
import type { Restaurant } from "../types/restaurant";
import { CSV_URL } from "../constants/api";

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(CSV_URL);
        const text = await res.text();

        const data = sheetParser(text);
        setRestaurants(data);
      } catch (err) {
        setError("Failed to fetch restaurants");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { restaurants, loading, error };
}