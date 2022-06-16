import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'follow me on twitter'}
      <Link color="inherit" href="https://twitter.com/bbgrey_sun">
        @bbgrey_sun
      </Link>{' '}
      {'.'}
    </Typography>
  );
}



const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function Album() {
    const cards = [
        './images/img4.jpg', 
        './images/img3.png', 
        './images/img1.jpg', 
        './images/img2.jpg', 
        
        
        './images/img5.jpg', 
        './images/img6.jpg'];

    const descriptions = [
        'Inking with subtle painting gives very nice shapes that are perfect for capturing expression.',
        'Just your average scuba diving encounter. Nothing to see here...',
        "You can't be as cool as he is, but you can feel the island breeze too.",
        "Dont't bother looking her in the eyes.. unless you want to stay there.",
        "Kept the lines on top of this one and I have to say it's giving me some nice ideas.",
        "Painting study of Shank from Wreck It Ralph pt. 2. Loved the warm colors and emotion in this screen capture."
    ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <TwitterIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            @bbgrey_sun
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hello!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This web page is dedicated to a big project currently in the works. 
              I'm an artist that does character design and paintings so please feel free 
              to take a look at some of my work below. Hint: these will be integral in the upcoming project!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" 
              onClick={(e) => {
                
                window.open(
                    "https://twitter.com/bbgrey_sun",
                    '_blank' // <- This is what makes it open in a new window.
                  );
                }}>
                <TwitterIcon style={{marginRight: "0.5em"}}/>
                follow me for updates!
                </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, indx) => (
              <Grid item key={"card"+indx} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={card}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    
                    <Typography>
                      {descriptions[indx]}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          See you soon!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Keep an eye out for updates on my project.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}