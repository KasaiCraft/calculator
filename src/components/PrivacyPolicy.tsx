import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including voice input data when using our calculator features.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information to provide and improve our services, including voice recognition and calculation features.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Data Storage
          </Typography>
          <Typography paragraph>
            Your voice data is processed in real-time and is not permanently stored on our servers.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Third-Party Services
          </Typography>
          <Typography paragraph>
            We use Google AdSense for advertising. Please refer to Google's privacy policy for more information.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy; 