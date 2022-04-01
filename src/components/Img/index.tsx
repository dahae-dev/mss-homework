import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{
  fallbackImgSrc?: string;
}

// ====

const Root = styled.img``;

const Img = ({
  className,
  src,
  alt = 'image',
  width,
  height,
  fallbackImgSrc = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg',
  ...props
}: ImgProps) => (
  <Root
    className={className}
    src={src ?? fallbackImgSrc}
    alt={alt}
    width={width}
    height={height}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = fallbackImgSrc;
    }}
    {...props}
  />
);

export default Img;
export type {
  ImgProps,
};
