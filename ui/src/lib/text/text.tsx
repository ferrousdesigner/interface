'use client';
import styled from 'styled-components';

const commonStyles = `
  font-family: var(--font-family-primary);
`;
const TextH1 = styled.h1`
  ${commonStyles}
  color: var(--color-header);
  font-size: var(--font-xxxl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextH2 = styled.h2`
  ${commonStyles}
  color: var(--color-header);
  font-size: var(--font-xxl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextH3 = styled.h3`
  ${commonStyles}
  color: var(--color-header);
  font-size: var(--font-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextH4 = styled.h4`
  ${commonStyles}
  color: var(--color-description);
  font-size: var(--font-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextH5 = styled.h5`
  ${commonStyles}
  color: var(--color-description);
  font-size: var(--font-md);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextH6 = styled.h6`
  ${commonStyles}
  color: var(--color-description);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
`;
const TextP = styled.p`
  ${commonStyles}
  color: var(--color-default);
  font-size: var(--font-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-md);
`;

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  style?: React.CSSProperties;
  inline?: boolean;
}
const Text = ({ children, variant = 'p', style, inline }: TextProps) => {
  const TextComponent =
    variant === 'h1'
      ? TextH1
      : variant === 'h2'
      ? TextH2
      : variant === 'h3'
      ? TextH3
      : variant === 'h4'
      ? TextH4
      : variant === 'h5'
      ? TextH5
      : variant === 'h6'
      ? TextH6
      : TextP;
  return (
    <>
      <TextComponent
        style={{ display: inline ? 'inline-block' : '', ...style }}
      >
        {children}
      </TextComponent>
    </>
  );
};

export default Text;
