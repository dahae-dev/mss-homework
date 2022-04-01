import styled from 'styled-components';

import Img from 'components/Img';
import Text from 'components/Text';

import empty from './empty.png';

interface EmptyStateProps {
  iconSrc?: string;
  text?: string;
}

// ====

const Root = styled.div``;

const EmptyState = ({
  iconSrc = empty,
  text = '검색 결과 없음',
}: EmptyStateProps) => (
  <Root>
    <Img
      src={iconSrc}
    />
    <Text size="m" color="gray6">
      {text}
    </Text>
  </Root>
);

export default EmptyState;
export type {
  EmptyStateProps,
};
