// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';
import Divider from '@mui/material/Divider';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ key, data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List key={"list" + key} sx={{ width: '100%', bgcolor: 'azure' }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Monica" src={data.photo} />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={`${data.phone} ${data.email}`} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
    </List>
  );
};

export default Contact;
