import React from 'react';
import AddUserForm from '../components/userForm/AddUserForm';
import { useNavigate } from 'react-router-dom';
import { postNewUser } from '../services/UserService';

const AddUserPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSave = async (newUser: any) => {
    console.log('New user data:', newUser);
    const res = await postNewUser (newUser)
    navigate('/users'); 
  };

  const handleCancel = () => {
    navigate('/users'); 
  };

  return (
    <div>
      <AddUserForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default AddUserPage;
