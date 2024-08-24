import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditChargingStationForm from '../components/chargingStationForm/EditChargingStationForm';
import { ChargingStation } from '../types/ChargingStation';
import { fetchChargingStations } from '../services/ChargingStationService';

const EditChargingStationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [station, setStation] = useState<ChargingStation | undefined>();
  const [chargingStations, setChargingStations] = useState<ChargingStation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChargingStations = async () => {
      try {
        const data = await fetchChargingStations('0886561303');
       
        setStation(data[0]);
      } catch (err) {
        console.error('Failed to fetch charging stations:', err);
      } finally {
        setLoading(false);
      }
    };

    getChargingStations();
  }, []);
 
console.log(station)
  const handleSave = (updatedStation: ChargingStation) => {
    console.log('Updated station:', updatedStation);
    navigate('/'); 
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="p-6">
      {station ? (
        <EditChargingStationForm station={station} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditChargingStationPage;
