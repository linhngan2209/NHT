import React, { useEffect, useState } from 'react';
import UserTable from '../components/userTable.tsx/UserTable';
import UserForm from '../components/userForm/UserForm';
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUserByManager } from '../services/UserService';

const UserManagementPage: React.FC = () => {
  const [user, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [page, setPage] = useState(1);
  
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const fetchedUsers = await getUserByManager('0886561303', 'user');
    setUsers(fetchedUsers);
  };

  const handleOnView = async (userId: string) => {
    navigate(`/history-charging/${userId}`);
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
     
    } catch (error) {
     
    }


  
  };

  const handleEditUser = (id: string) => {
    navigate(`/edit-user/${id}`);
  };
  const handleAdd = () => {
    navigate(`/add-user`); 
  };
  return (
    <div>
      <UserTable users={user} onEdit={handleEditUser} onDelete={handleDeleteUser} onAdd={handleAdd} onExport={handleAdd} onView={handleOnView}/>
    </div>
  );
};

export default UserManagementPage;
