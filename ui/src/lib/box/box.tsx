import styled from 'styled-components';

const DivBox = styled.div``;

const SectionBox = styled.section``;

const ArticleBox = styled.article``;
const AsideBox = styled.aside``;

interface BoxProps {
  children: React.ReactNode;
  variant?: 'div' | 'section' | 'article' | 'aside';
  layout?: 'flex-row' | 'flex-col' | 'block' | 'inline-block';
  subLayout?: 'center-top' | 'center-center' | 'center-bottom';
  style?: React.CSSProperties;
}

const Box = ({
  children,
  variant = 'div',
  layout = 'flex-row',
  subLayout = 'center-center',
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
  const subStyle =
    layout === 'flex-row'
      ? subLayout === 'center-top'
        ? { justifyContent: 'center', alignItems: 'flex-start' }
        : { justifyContent: 'center', alignItems: 'flex-start' }
      : { justifyContent: 'center', alignItems: 'flex-start' };
  const boxStyles =
    layout === 'flex-row'
      ? {
          display: 'flex',
          gap: 'var(--space-md)',
          alignItems: 'center',
        }
      : layout === 'flex-col'
      ? {
          display: 'flex',
          gap: 'var(--space-md)',
          flexDirection: 'column',
        }
      : layout === 'block'
      ? {
          display: 'block',
          margin: 'var(--space-md)',
        }
      : layout === 'inline-block'
      ? {
          display: 'inline-block',
          margin: 'var(--space-md)',
        }
      : {};
  return (
    <ActualBox
      style={{ ...boxStyles, ...subStyle, ...style } as React.CSSProperties}
    >
      {children}
    </ActualBox>
  );
};

export default Box;
