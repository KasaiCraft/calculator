import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Use License
          </Typography>
          <Typography paragraph>
            Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Disclaimer
          </Typography>
          <Typography paragraph>
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Limitations
          </Typography>
          <Typography paragraph>
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Revisions
          </Typography>
          <Typography paragraph>
            We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService; 