import React, { useState } from 'react';
import { User } from '../../types/User';

interface EditUserFormProps {
  user: User;
  handleSave: (id: string, updatedUser: any) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, handleSave, onCancel }) => {
  const [formData, setFormData] = useState<User>(user.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave(formData._id,formData);
  };
console.log(formData)
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rule" className="block text-sm font-medium text-gray-700">Rule</label>
        <input
          type="text"
          name="rule"
          id="rule"
          value={formData.rule}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">Save</button>
      </div>
    </form>
  );
};

export default EditUserForm;
