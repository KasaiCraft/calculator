import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import MicIcon from '@mui/icons-material/Mic';
import TranslateIcon from '@mui/icons-material/Translate';
import TimerIcon from '@mui/icons-material/Timer';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Voice Calculator
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
          Voice Calculator is an innovative web application that combines the power of voice recognition
          with advanced calculation capabilities. Our mission is to make mathematical operations more
          accessible and convenient for everyone.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <CalculateIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Advanced Calculator
              </Typography>
              <Typography variant="body2">
                Perform complex calculations with ease using our intuitive interface.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <MicIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Voice Recognition
              </Typography>
              <Typography variant="body2">
                Simply speak your calculations and let our app do the work for you.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <TranslateIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Multi-language Support
              </Typography>
              <Typography variant="body2">
                Use the calculator in your preferred language with our translation feature.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <TimerIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Timer Function
              </Typography>
              <Typography variant="body2">
                Set timers and alarms for your calculations and tasks.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Our Team
          </Typography>
          <Typography paragraph>
            We are a dedicated team of developers and mathematicians working to make
            mathematical tools more accessible to everyone. Our passion for innovation
            drives us to create better solutions for everyday calculations.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About; 