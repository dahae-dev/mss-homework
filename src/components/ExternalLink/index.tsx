import { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}


const Link = styled.a``;

const ExternalLink = ({
  target = '_blank',
  rel = 'noopener',
  ...props
}: ExternalLinkProps) => {
  return (
    <Link
      target={target}
      rel={rel}
      {...props}
    />
  );
};

export default ExternalLink;
export type {
  ExternalLinkProps,
};
