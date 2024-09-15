'use client';
import React from 'react';
import styled from 'styled-components';

const DivBox = styled.div``;
const SectionBox = styled.section``;
const ArticleBox = styled.article``;
const AsideBox = styled.aside``;

interface BoxProps {
  children: React.ReactNode;
  variant?: 'div' | 'section' | 'article' | 'aside';
  layout?:
    | 'block'
    | 'inline-block'
    | 'flex-row'
    | 'flex-column'
    | 'grid-center'
    | 'inline-flex-row'
    | 'inline-flex-column'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Box = ({
  children,
  variant = 'div',
  layout = 'block',
  gap = 'var(--space-md)',
  onClick,
  style,
}: BoxProps) => {
  const ActualBox =
    variant === 'div'
      ? DivBox
      : variant === 'section'
      ? SectionBox
      : variant === 'article'
      ? ArticleBox
      : variant === 'aside'
      ? AsideBox
      : DivBox;

  const layoutStyles =
    layout === 'block'
      ? {
          display: 'block',
          margin: 'var(--space-md)',
        }
      : layout === 'inline-block'
      ? {
          display: 'inline-block',
          margin: 'var(--space-md)',
        }
      : layout === 'flex-row'
      ? {
          display: 'flex',
          flexDirection: 'row',
          gap: gap,
          justifyContent: 'center',
          alignItems: 'center',
        }
      : layout === 'flex-column'
      ? {
          display: 'flex',
          flexDirection: 'column',
          gap: gap,
          justifyContent: 'center',
          alignItems: 'center',
        }
      : layout === 'inline-flex-row'
      ? {
          display: 'inline-flex',
          flexDirection: 'row',
          gap: gap,
          justifyContent: 'center',
          alignItems: 'center',
        }
      : layout === 'inline-flex-column'
      ? {
          display: 'inline-flex',
          flexDirection: 'column',
          gap: gap,
          justifyContent: 'center',
          alignItems: 'center',
        }
      : layout === 'grid-center'
      ? {
          display: 'grid',
          gap: gap,
          justifyItems: 'center',
          alignItems: 'center',
        }
      : layout === 'space-around'
      ? {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }
      : layout === 'space-between'
      ? {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      : layout === 'space-evenly'
      ? {
          display: 'flex',
          justifyContent: 'space-evenly',
        }
      : {};

  return (
    <ActualBox
      style={{ ...layoutStyles, ...style } as React.CSSProperties}
      onClick={onClick}
    >
      {children}
    </ActualBox>
  );
};

export default Box;
