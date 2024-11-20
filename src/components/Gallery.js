import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
  const sampleImages = [
    { id: 1, url: './images/img1.jpg' },
    { id: 2, url: './images/img2.jpeg' },
    { id: 3, url: './images/img5.jpg' },
    { id: 4, url: './images/img4.jpeg' },
    { id: 5, url: './images/img3.jpeg' },
    { id: 6, url: './images/img10.jpg' },
    { id: 7, url: './images/img6.jpg'  },
    { id: 8, url: './images/img7.jpg' },
    { id: 9, url: './images/img2.jpg' },
    { id: 10, url: 'https://img.vistarooms.com/gallery/shimla-manor-454631.jpg' },
    { id: 11, url: './images/img8.jpeg' }
  ];

  return (
    <div>
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Gallery</h2>
      <Carousel>
        {sampleImages.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={`${image.theme} Slide`}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              {/* <h5>{image.theme}</h5>
              <p>Sample photos of {image.theme} sessions.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
