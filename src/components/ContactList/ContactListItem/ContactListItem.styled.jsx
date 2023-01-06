import styled from '@emotion/styled';
import { FcContacts } from 'react-icons/fc';

export const Icon = styled(FcContacts)`
  width: ${p => p.theme.space[5]};
  height: ${p => p.theme.space[5]};
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns:
    ${p => p.theme.space[5]}
    1fr
    ${p => p.theme.space[6]};
  grid-template-rows: ${p => p.theme.space[5]};
  grid-column-gap: ${p => p.theme.space[5]};
  /* justify-content: space-between; */
  align-items: center;
  gap: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontsSizes.m}px;

  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.bgGrey};
    border-radius: ${p => p.theme.radii.generic};
  }
`;

export const ContactText = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-align: start;
`;

export const RemoveContactButton = styled.button`
  min-width: 48px;
  height: 24px;

  padding: 2px 2px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.bgGrey};

  font-size: ${p => p.theme.fontsSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};

  border: 2px solid ${p => p.theme.colors.lightRed};
  border-radius: ${p => p.theme.radii.semiRound};

  cursor: pointer;
  transition: background-color 250ms ease-out 0s, border-color 250ms ease-out 0s;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.lightRed};
    border: 2px solid transparent;
  }
`;
