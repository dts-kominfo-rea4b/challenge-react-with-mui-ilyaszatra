// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app

const Header = () => {
  
  return (
    <>
      <div><h1>Call a Friend</h1></div>
      <div>
        <Divider sx={{ '--Divider-childPosition': `50%` }}>
          Your friendly contact app
        </Divider>
      </div>
    </>
  );
};

export default Header;
