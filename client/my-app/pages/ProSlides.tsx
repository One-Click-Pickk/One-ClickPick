import Carousel from 'react-bootstrap/Carousel';

export default function ProSlides() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img1.png"
            alt="First slide"
          />
          <Carousel.Caption className='shades'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img2.png"
            alt="Second slide"
          />
  
          <Carousel.Caption className='shades'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img3.png"
            alt="Third slide"
          />
  
          <Carousel.Caption className='shades'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
      
}
