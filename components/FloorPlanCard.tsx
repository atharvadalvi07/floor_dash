import React, { useState } from 'react';
import { Card, CardMedia, Tooltip, Typography, Box, Link } from '@mui/material';

const rooms = [
  {
    name: 'Office 603',
    area: '500 sqft',
    top: '9.1%',
    left: '4.4%',
    width: '29.9%',
    height: '83%',
    clipPath: 'polygon(0% 0%, 33% 0%, 33% 22.5%, 57.5% 22.5%, 57.5% 32%, 72% 32%, 72% 47.5%, 100% 47.5%, 100% 100%, 0% 100%, 0% 50%)',
  },
  {
    name: 'Office 601',
    area: '300 sqft',
    top: '9.1%',
    left: '71.8%',
    width: '24.7%',
    height: '83.3%',
  },
  {
    name: 'Office 602',
    area: '300 sqft',
    top: '48.5%',
    left: '34.8%',
    width: '36.5%',
    height: '43.9%',
  },
];

const FloorPlanCard = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleMouseEnter = (roomName: string) => {
    setSelectedRoom(roomName);
  };

  const handleMouseLeave = () => {
    setSelectedRoom(null);
  };

  return (
    <Card sx={{ width: '100%', position: 'relative' }}>
      <CardMedia
        component="img"
        image="/floorplan.jpg"
        alt="Floor Plan"
      />
      {rooms.map((room, index) => (
        <Box key={index}>
          <Box
            sx={{
              position: 'absolute',
              top: room.top,
              left: room.left,
              width: room.width,
              height: room.height,
              backgroundColor: 'rgba(255, 255, 255, 0)',
              zIndex: 1,
              clipPath: room.clipPath || 'none', 
            }}
          />
          <Tooltip
            title={
              <Box>
                <Typography variant="body2">Area: {room.area}</Typography>
                <Typography variant="body2">Temperature: °C</Typography>
                <Typography variant="body2">Humidity: %</Typography>
                <Typography variant="body2">CO₂: ppm</Typography>
                <Typography variant="body2">PM2.5: μg/m³</Typography>
                <Typography variant="body2">TVOC: mg/m³</Typography>
              </Box>
            }
            placement="right"
            arrow
          >
            <Link
              href="https://iaqi.respirer.in/"
              target="_blank"
              rel="noopener"
              onMouseEnter={() => handleMouseEnter(room.name)}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: 'absolute',
                top: room.top,
                left: room.left,
                width: room.width,
                height: room.height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                color: 'black',
                padding: '5px',
                borderRadius: '5px',
                cursor: 'pointer',
                zIndex: 2,
                clipPath: room.clipPath || 'none', 
              }}
            >
              {room.name}
            </Link>
          </Tooltip>
        </Box>
      ))}
    </Card>
  );
};

export default FloorPlanCard;
