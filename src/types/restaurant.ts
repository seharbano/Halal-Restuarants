export interface Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;

  image: string; // ✅ ADD THIS
  cuisine: string;
  halalStatus: string;
  phone: string;
  website: string;
  hours: string;
}