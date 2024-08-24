import React, { useEffect, useState } from 'react';
import ChargingStationTable from '../components/chargingStationTable/ChargingStationTable';
import { ChargingStation } from '../types/ChargingStation';
import { fetchChargingStations } from '../services/ChargingStationService';
import { useNavigate } from 'react-router-dom';

const ChargingStationManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const [chargingStations, setChargingStations] = useState<ChargingStation[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStation, setEditingStation] = useState<ChargingStation | undefined>(undefined);
 
  useEffect(() => {
    const getChargingStations = async () => {
      try {
        const data = await fetchChargingStations('0886561303');
        setChargingStations(data);
      } catch (err) {
        console.error('Failed to fetch charging stations:', err);
      } finally {
        setLoading(false);
      }
    };

    getChargingStations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleEdit = () => {
    navigate(`/edit-station/66c324859d596518aa4614da`); 
  };
  
 
    const handleView = (station: string) => {
      navigate(`/charging-station-history/${station}`);
    };
  
  const handleSave = (station: ChargingStation) => {
    if (editingStation) {
        
        setChargingStations((prev) => 
            prev.map(s => s._id === station._id? station : s)
        );
    } else {
      
        const newStation: ChargingStation = {
          _id: chargingStations[0]?.id || '',
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [station.geometry.lat, station.geometry.lng],
            lng: 0,
            lat: 0
          },
          properties: {
            stationName: station?.name,
            address: station.formatted_address,
            bussinessStatus: station.businessStatus,
            openingHours: 'Open',
            rating: station.user_ratings_total,
            totalChargingPorts: 9, // Set this based on your logic
          },
          user_ratings_total: 0,
          businessStatus: '',
          name: '',
          formatted_address: '',
          id: undefined
        };

        setChargingStations((prev) => [...prev, newStation]);
    }
    setEditingStation(undefined);
};

  const handleAdd = () => {
    navigate(`/add-station`);
  };
  
  const handleDelete = (id: string) => {
    setChargingStations((prev) => prev.filter(s => s._id !== id));
  };

  return (
    <div>
      <ChargingStationTable 
        onExport={handleAdd} 
        onAdd={handleAdd}
        stations={chargingStations} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        onView={handleView}
      />
      {/* Uncomment and implement if you have a form for editing or adding stations */}
      {/* <ChargingStationForm 
        existingStation={editingStation} 
        onSave={handleSave} 
      /> */}
    </div>
  );
};

export default ChargingStationManagementPage;
