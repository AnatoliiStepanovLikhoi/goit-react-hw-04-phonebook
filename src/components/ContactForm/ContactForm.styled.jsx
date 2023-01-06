import styled from '@emotion/styled';

export const Form = styled.form`
  width: 500px;
  margin-bottom: ${p => p.theme.space[3]};
  padding: ${p => p.theme.space[3]};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.generic};

  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: block;

  margin-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontsSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.semiBold}; ;
`;

export const Input = styled.input`
  display: block;

  margin: ${p => p.theme.space[2]} auto ${p => p.theme.space[0]};
  width: 320px;
  padding: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontsSizes.s}px;

  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.semiRound};
  background-color: ${p => p.theme.colors.bgGrey};

  transition: border 250ms ease-out 0s, background-color 250ms ease-out 0s;

  &:focus-within {
    border: 1px solid ${p => p.theme.colors.grey};
    background-color: rgb(245, 248, 250);
    filter: drop-shadow(${p => p.theme.colors.accentShadow} 0px 4px 4px);
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const AddContactButton = styled.button`
  min-width: 80px;
  height: 40px;

  padding: 4px 16px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.bgGrey};

  font-size: ${p => p.theme.fontsSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};

  border: 2px solid ${p => p.theme.colors.accentShadow};
  border-radius: ${p => p.theme.radii.semiRound};

  cursor: pointer;
  transition: background-color 250ms ease-out 0s, border-color 250ms ease-out 0s;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accentShadow};
    border: 2px solid transparent;
  }
`;
