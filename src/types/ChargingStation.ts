export interface ChargingStation {
  id: string | undefined;
  user_ratings_total: number;
  businessStatus: string;
  name: string;
  formatted_address: string;
  _id: string; 
  type: string; 
  geometry: {
      lng: number;
      lat: number;
      type: string;
      coordinates: [number, number]; 
  };
  properties: {
      stationName: string; 
      address: string; 
      bussinessStatus: string; 
      openingHours: string,
      rating: number; 
      totalChargingPorts: number; 
  };
  status?: "AVAILABLE" | "UNAVAILABLE";
}
