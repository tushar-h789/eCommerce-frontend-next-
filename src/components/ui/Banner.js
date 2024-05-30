"use client"

import Carousel from 'react-bootstrap/Carousel';
// import banner1 from '../../assets/banner1.jpg'
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import banner3 from '../../assets/banner3.jpeg'
import Image from 'next/image'


const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
      src={banner1}
      alt="banner"
      height={200}
    //   sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover', // cover, contain, none
        }}
    />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={banner2}
      alt="banner"
      height={200}
    //   sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover', // cover, contain, none
        }}
    />
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={banner3}
      alt="banner"
      height={200}
    //   sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover', // cover, contain, none
        }}
    />
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner