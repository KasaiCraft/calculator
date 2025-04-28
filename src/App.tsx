import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import About from './components/About';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7836411225694963" crossOrigin="anonymous"></script>
        <meta name="google-site-verification" content="ca-pub-7836411225694963" />
      </Helmet>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Voice Calculator
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/privacy">Privacy</Button>
            <Button color="inherit" component={Link} to="/terms">Terms</Button>
          </Toolbar>
        </AppBar>

        <Container>
          <Box sx={{ my: 4 }}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
};

export default App; 