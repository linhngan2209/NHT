import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../LOGO.svg';
import BackgroundHome from '../backgroudhome.jpg';

const HomeScreenPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-no-repeat " style={{ backgroundImage: `url(${BackgroundHome})` }}>
      <header className="flex items-center justify-between bg-[#00A7AF] p-4">
        <img src={Logo} alt="Logo" className="h-21" />
        <nav className="space-x-24">
        <button onClick={() => navigate('/')} className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}>Trang chủ</button>
          <button onClick={() => navigate('/info')} className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}>Thông Tin</button>
          <button onClick={() => navigate('/contact')} className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}>Liên Hệ</button>
          <button onClick={() => navigate('/about')} className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}>Giới Thiệu</button>
        </nav>
        <div>
          <button onClick={handleLogin} className="bg-white text-[#00A7AF] px-4 py-2 rounded-md mr-2">Đăng Nhập</button>
          <button onClick={handleRegister} className="bg-white text-[#00A7AF] px-4 py-2 rounded-md">Đăng Ký</button>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-start pl-10">
        <div className="text-left" style={{ color: '#1291A2', fontFamily: 'Roboto, sans-serif', fontSize: '64px' }}>
          <h1>PROCUREMENT</h1>
          <h1>SOFTWARE</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenPage;
