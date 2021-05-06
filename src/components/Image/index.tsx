import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import notFound from 'public/images/notfound-image.jpg';

export default function Image(props: ImgHTMLAttributes<any>) {
  const onError = (e: any) => {
    e.target.onerror = null;
    e.target.src = notFound;
  };

  return <SImage onError={onError} {...props} />;
}

const SImage = styled.img`
  animation: lazy 0.5s ease-in forwards;
  @keyframes lazy {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
