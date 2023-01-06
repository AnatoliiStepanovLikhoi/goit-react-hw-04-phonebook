import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin-bottom: ${p => p.theme.space[3]};
  padding: ${p => p.theme.space[3]};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.generic};

  margin-left: auto;
  margin-right: auto;

  /* text-align: start; */
`;

export const ContactsMessage = styled.span`
  font-size: ${p => p.theme.fontsSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
