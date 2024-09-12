'use client';
import styled from 'styled-components';

const commonStyles = `
  font-family: var(--font-family-primary);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
  text-align: center;
  height: var(--button-height);
  box-shadow: 0 0.4rem 1rem var(--color-shadow);
  background: #ffffff;
  border-radius: var(--border-radius-md);
  padding: 0 2rem;
  border: none;
  cursor: pointer;
  margin: var(--space-sm);
  margin-left: 0;
  `;

const PrimaryButton = styled.button`
  ${commonStyles}
  background: var(--color-primary);
  color: var(--color-primary-button-font);
`;
const OutlineButton = styled.button`
  ${commonStyles}
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  box-shadow: none;
`;
const DefaultButton = styled.button`
  ${commonStyles}
  background: var(--color-fg);
  color: var(--color-primary);
`;

export function Button({
  children,
  variant = 'default',
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'outlined' | 'default';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };
  return variant === 'primary' ? (
    <PrimaryButton disabled={disabled} onClick={handleClick}>
      {children}
    </PrimaryButton>
  ) : variant === 'outlined' ? (
    <OutlineButton disabled={disabled} onClick={handleClick}>
      {children}
    </OutlineButton>
  ) : (
    <DefaultButton disabled={disabled} onClick={handleClick}>
      {children}
    </DefaultButton>
  );
}

export default Button;
