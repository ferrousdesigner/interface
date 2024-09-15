'use client';

import styled from 'styled-components';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: 'xs' | 'sm' | 'md' | 'lg';
  margin?: 'sm' | 'md' | 'lg' | 'xl';
  dashed?: boolean;
  style?: React.CSSProperties;
}

const marginSizes = {
  sm: '1rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
};

const thicknessSizes = {
  xs: '0.5px',
  sm: '1px',
  md: '1.5px',
  lg: '2px',
};

const StyledDivider = styled.div<DividerProps>`
  background-color: ${({ color = 'var(--color-neutral)' }) => color};

  ${({ orientation = 'horizontal', thickness = '1px' }) =>
    orientation === 'vertical'
      ? `width: ${
          thicknessSizes[thickness as keyof typeof thicknessSizes] || thickness
        }; height: 100vh;`
      : `height: ${
          thicknessSizes[thickness as keyof typeof thicknessSizes] || thickness
        }; width: 100%;`}

  ${({ orientation = 'horizontal', margin = 'sm' }) =>
    orientation === 'vertical'
      ? `margin-left: ${
          marginSizes[margin as keyof typeof marginSizes] || margin
        };`
      : `margin-top: ${
          marginSizes[margin as keyof typeof marginSizes] || margin
        };`}

  border-style: ${({ dashed }) => (dashed ? 'dashed' : 'solid')};
  border-width: ${({ thickness = '1px' }) =>
    thicknessSizes[thickness as keyof typeof thicknessSizes] || thickness};
  border-color: ${({ color = 'var(--color-neutral)' }) => color};
`;

const Divider = ({
  orientation = 'horizontal',
  color = '#e0e0e0',
  thickness = 'xs',
  margin = 'sm',
  dashed = false,
  style,
}: DividerProps) => {
  return (
    <StyledDivider
      orientation={orientation}
      color={color}
      thickness={thickness}
      margin={margin}
      dashed={dashed}
      style={style}
    />
  );
};

export default Divider;
