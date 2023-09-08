
import React from 'react';
import { Typography, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function GalleryPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to My Gallery
      </Typography>
      <Carousel autoPlay={true} interval={2000} showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src="https://wallpapers.com/images/hd/google-landscape-mxog354zfcx5gyj7.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://wallpapers.com/images/hd/google-landscape-5hplpr8akvqtql0y.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://cdn.vox-cdn.com/thumbor/vabx-KeOe5GULF4lqyITVmXMU6I=/0x0:1600x800/1400x788/filters:focal(800x400:801x401)/cdn0.vox-cdn.com/uploads/chorus_asset/file/8853589/google_ai_photography_street_view_2.jpg" alt="Image 3" />
        </div>
      </Carousel>

    </Container>
  );
}

export default GalleryPage;