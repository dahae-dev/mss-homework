import styled from 'styled-components';
import { ml, mt, px, py, Padding } from 'styled-components-spacing';

import ExternalLink from 'components/ExternalLink';
import Img from 'components/Img';
import Partition from 'components/Partition';
import Text from 'components/Text';
import type { IItem } from 'types';

interface ItemCardProps {
  item: IItem;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Label = styled.div`
  display: inline-block;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontStyles.s.fontSize};
  line-height: ${({ theme }) => theme.fontStyles.s.lineHeight};
  z-index: ${({ theme }) => theme.zIndexes[1]};
  ${ml(1.25)}
  ${mt(-2.5)}
  ${px(0.75)}
  ${py(0.5)}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndexes[0]};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemCard = ({
  item,
}: ItemCardProps) => (
  <Root>
    <ImgWrapper>
      <ExternalLink
        href={item.linkUrl}
      >
        <Img
          src={item.imageUrl}
          width="100%"
        />
      </ExternalLink>
      {
        item.isSoldOut && (
          <Overlay>
            <Text
              size="xl"
              color="gray7"
              transform="uppercase"
            >
              Sold Out
            </Text>
          </Overlay>
        )
      }
    </ImgWrapper>
    {
      item.isExclusive && (
        <Label>
          단독
        </Label>
      )
    }
    <Padding vertical={2.5} horizontal={1.25}>
      <ExternalLink
        href={item.brandLinkUrl}
      >
        <Text size="xs">
          {item.brandName}
        </Text>
      </ExternalLink>
      <Padding top={1}>
        <Text
          size="m"
          lineClamp={2}
        >
          {item.goodsName}
        </Text>
      </Padding>
      <Padding top={0.5}>
        <Partition>
          <Partition.Main>
            <Text size="l">
              {`${item.price.toLocaleString()}원`}
            </Text>
          </Partition.Main>
          {
            item.isSale && (
              <Partition.Side>
                <Text size="l" color="red">
                  {`${item.saleRate}%`}
                </Text>
              </Partition.Side>
            )
          }
        </Partition>  
        {
          item.isSale && (
            <Text
              size="xs"
              color="gray6"
              decoration="line-through"
            >
              {`${item.normalPrice.toLocaleString()}원`}
            </Text>
          )
        }
      </Padding>
    </Padding>
  </Root>
);

export default ItemCard;
export type {
  ItemCardProps,
};
