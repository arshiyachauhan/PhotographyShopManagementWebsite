// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// const Gallery = () => {
//   const sampleImages = [
//     { id: 1, url: 'https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-6/464784398_3835028086745435_8041537567634350621_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NPQBM6OQ3FkQ7kNvgGdr21K&_nc_zt=23&_nc_ht=scontent.fdel1-6.fna&_nc_gid=AZpaExw3WQ1cwCdI_UEELc-&oh=00_AYBMf-vfVU0r45bMMr56qrUrMrnRMI0rYxnpEqvWuhiOEg&oe=67392D58', theme: 'Wedding' },
//     { id: 2, url: 'https://via.placeholder.com/800x400', theme: 'Portrait' },
//     { id: 3, url: 'https://via.placeholder.com/800x400', theme: 'Product' }
//   ];

//   return (
//     <div>
//       <h2 className="text-center mb-4">Gallery</h2>
//       <Carousel>
//         {sampleImages.map((image) => (
//           <Carousel.Item key={image.id}>
//             <img
//               className="d-block w-100"
//               src={image.url}
//               alt={`${image.theme} Slide`}
//             />
//             <Carousel.Caption>
//               <h5>{image.theme}</h5>
//               <p>Sample photos of {image.theme} sessions.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
  const sampleImages = [
    { id: 1, url: 'https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-6/464784398_3835028086745435_8041537567634350621_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NPQBM6OQ3FkQ7kNvgGdr21K&_nc_zt=23&_nc_ht=scontent.fdel1-6.fna&_nc_gid=AnIscEs2pcYiblD1vUt4I6-&oh=00_AYDaLKMBfI0ysLvCheKM-GmudEcb3E9tc6z5WUw79cC_hA&oe=67392D58', theme: 'Wedding' },
    { id: 2, url: 'https://scontent.fdel1-3.fna.fbcdn.net/v/t39.30808-6/361217413_656645796486847_4633647416442146261_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=0tMShingPlAQ7kNvgF1mqDS&_nc_zt=23&_nc_ht=scontent.fdel1-3.fna&_nc_gid=ANWCsS2b3oogY1YVcSpvCQT&oh=00_AYBzqz_aTeJHbRx12c_tWjQSljTh8GvRzlwd7rWYf7Ck9w&oe=673945F1', theme: 'Portrait' },
    { id: 3, url: 'https://img.vistarooms.com/gallery/shimla-manor-454631.jpg', theme: 'Parties' }
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Gallery</h2>
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
              <h5>{image.theme}</h5>
              <p>Sample photos of {image.theme} sessions.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
