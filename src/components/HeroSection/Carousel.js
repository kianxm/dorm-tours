import Carousel from 'react-bootstrap/Carousel';

function IndivInter() {
  return (
    <Carousel>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="/images/dorm_images/swig.png"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>Swig</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src='/images/dorm_images/graham_layout.png'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Graham</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/images/dorm_images/finn_layout.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Finn</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndivInter;