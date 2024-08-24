import React, { useState } from 'react';
import { ChargingStation } from '../../types/ChargingStation';

interface ChargingStationFormProps {
  station: ChargingStation; 
  onSave: (updatedStation: ChargingStation) => void;
  onCancel: () => void;
}


const EditChargingStationForm: React.FC<ChargingStationFormProps> = ({ station, onSave, onCancel }) => {
  const [formData, setFormData] = useState<ChargingStation>(station);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Charging Station</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.properties?.stationName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="formatted_address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="formatted_address"
            name="formatted_address"
            value={formData.properties?.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          
        </div>
        <div>
          <label htmlFor="totalChargingPorts" className="block text-sm font-medium text-gray-700">Total Charging Ports</label>
          <input
            type="text"
            id="totalChargingPorts"
            name="totalChargingPorts"
            value={formData.properties?.totalChargingPorts}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          
        </div>
        <div>
          <label htmlFor="businessStatus" className="block text-sm font-medium text-gray-700">Business Status</label>
          <select
            id="businessStatus"
            name="businessStatus"
            value={formData.businessStatus}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="OPEN">Open</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status || ''} 
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="AVAILABLE">Available</option>
            <option value="UNAVAILABLE">Unavailable</option>
          </select>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditChargingStationForm;
