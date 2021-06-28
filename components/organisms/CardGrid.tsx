import React, { memo } from 'react';
import Card from '../molcules/Card';
import * as S from '../../styles/globalStyles';
import Link from 'next/link';
import Toggle from '../molcules/Toggle';
import * as TYPE from '../../interface/index';

interface CardGridProps {
  handleEnroll: (id: string) => void;
  handleCancel: (enjoyId: number) => void;
  useInfinity?: (pageSet: number, value: string) => void;
  card: any;
  value: string;
}

const CardGrid = memo(
  ({ handleEnroll, handleCancel, useInfinity, card, value }: CardGridProps) => {
    if (useInfinity) {
      let pageSet = 0;
      useInfinity(pageSet, value);
    }
    return (
      <S.GridMainCard>
        {card.length > 5 ? (
          card.map((item: TYPE.cardProps) => {
            return (
              <S.CardWrapper key={item.id}>
                <Link href={`/Detail/${item.image.id}`}>
                  <a>
                    <Card
                      url={item.image.url}
                      breedGroup={item.breed_group}
                      name={item.name}
                      width={100}
                      height={100}
                    />
                    <Toggle
                      src1={'/yellowstar.png'}
                      src2={'/star.png'}
                      handleEnroll={handleEnroll}
                      handleCancel={handleCancel}
                      id={item.image.id}
                    />
                  </a>
                </Link>
              </S.CardWrapper>
            );
          })
        ) : (
          <Card
            url={card[0]?.url}
            breedGroup={card[0]?.breeds[0]?.breed_group}
            name={card[0]?.breeds[0]?.name}
            width={350}
            height={350}
          />
        )}
      </S.GridMainCard>
    );
  }
);

export default CardGrid;
