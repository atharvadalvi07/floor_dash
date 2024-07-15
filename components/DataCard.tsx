"use client";
import { Card, Typography, Container, Box, Divider } from "@mui/material";
import React from "react";

const DataCard = () => {
  return (
    <Container>
      <Box mb={4}>
        <Card className="p-4 shadow-none rounded-lg">
          <Typography className="mt-[18px] text-2xl font-bold">Comfort</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Box flexGrow={1}>
              <Typography className="pt-3 text-3xl"> 
                100 <span className="text-xl"> IEW Index </span> </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Typography className="text-3xl font-bold">
              10 <span className="text-xl"> hrs</span>
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box mb={4}>
        <Card className="p-4 shadow-none rounded-lg">
          <Typography className="mt-[18px] text-2xl font-bold">Indoor Air Quality</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Box flexGrow={1}>
            <Typography className="pt-3 text-3xl"> 
            100 <span className="text-xl"> IEW Index </span> </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Typography className="text-3xl font-medium">
              10 <span className="text-xl"> hrs </span>
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box mb={4}>
        <Card className="p-4 shadow-none rounded-lg">
          <Typography className="mt-[18px] text-2xl font-bold">Overall Wellness</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Box flexGrow={1}>
            <Typography className="pt-3 text-3xl"> 
            100 <span className="text-xl"> IEW Index </span> </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Typography className="text-3xl font-medium">
              10 <span className="text-xl"> hrs </span>
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box mb={4}>
        <Card className="p-4 shadow-none rounded-lg">
          <Typography className="mt-[18px] text-2xl font-bold">Pollution Control</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Box flexGrow={1}>
            <Typography className="pt-3 text-3xl"> 
            100 <span className="text-xl"> IEW Index </span> </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Typography className="text-3xl font-bold">
              10 <span className="text-xl"> hrs </span>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default DataCard;
