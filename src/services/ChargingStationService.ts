import axiosClient from "./apiService";



export const fetchChargingStations = async (phone: string) => {
  try {
    const response = await axiosClient.get('/webapi/fetch_charging_station', {
      params :{
        phone: phone
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching charging stations:', error);
    throw error;
  }
};

export const getHistoryChargingStationsByUser = async (stationName: string) => {
  try {
    const response = await axiosClient.get('/webapi/fetch_detail_station', {
      params :{
        stationName: stationName
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching charging stations:', error);
    throw error;
  }
};

export const postNewStation = async (newStation: any) => {
  try {
    console.log(newStation)
    const response = await axiosClient.post(`/webapi/createStation`, {
      newStation: newStation
    });
    return response;
  } catch (error) {
    console.error('Error fetching charging stations:', error);
    throw error;
  }
};