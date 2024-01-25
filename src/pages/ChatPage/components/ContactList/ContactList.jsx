import React, { useState } from 'react';
import "./contactList.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ChatChannel from '../ChatChannel/ChatChannel';
import SearchBox from '../SearchBox/SearchBox';

export default function ContactList() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <SearchBox />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Private" />
                        <Tab label="Group" />
                    </Tabs>
                </Box>
                <ChatChannel value={value} index={0}>
                    Item One
                </ChatChannel>
                <ChatChannel value={value} index={1}>
                    Item Two
                </ChatChannel>
            </Box>
        </div>
    )
}
