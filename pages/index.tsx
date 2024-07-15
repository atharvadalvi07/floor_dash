import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import FloorPlanCard from '../components/FloorPlanCard';
import DataCard from '../components/DataCard';
import '../app/globals.css';

const Home = () => {
  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <FloorPlanCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <DataCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
