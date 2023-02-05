import { useRouter } from 'next/router';
import React, { useState, useEffect, memo } from 'react';
import { Nav } from 'react-bootstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import styles from './index.module.scss';

interface Item {
  src: string;
  altText: string;
  caption: string;
  title: string;
  url: string;
}

interface Props {
  rotationLength: number;
  items: Item[];
  showMiniatures: boolean;
  showArrows: boolean;
  height?: number;
  width?: number;
}

export const Slideshow: React.FC<Props> = (props) => {
  const { rotationLength, items, showMiniatures, showArrows, height = 400, width = 800 } = props;
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, rotationLength * 1000);
    return () => clearInterval(interval);
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={styles.customCarouselItem}
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img alt={item.altText} className={styles.carouselImage} height={height} src={item.src} width={width} />
        <CarouselCaption captionText={item.caption} className="text-center">
          <h3>{item.caption}</h3>
          <Nav.Link onClick={() => router.replace(item.url)}>{item.title}</Nav.Link>
        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {showMiniatures && <CarouselIndicators activeIndex={activeIndex} items={items} onClickHandler={goToIndex} />}
      {slides}
      {showArrows && (
        <>
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </>
      )}
    </Carousel>
  );
};

export default memo(Slideshow);
