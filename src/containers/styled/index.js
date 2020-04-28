import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  max-width: 900px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(6, 90px);
  column-gap: 15px;
  row-gap: 15px;
`;

export const StyledItem = styled.div`
  overflow: hidden;
  ${({ number }) => ({
    0: css`
      grid-column: 1/4;
      grid-row: 1/4;
      text-indent: -140px;
    `,
    1: css`
      grid-column: 4/7;
      grid-row: 1/4;
      text-indent: -140px;
    `,
    2: css`
      grid-column: 7/10;
      grid-row: 1/4;
      text-indent: -140px;
    `,
    3: css`
      grid-column: 1/5;
      grid-row: 4/7;
    `,
    4: css`
      grid-column: 5/10;
      grid-row: 4/7;
    `,
    })[number]
  };
`;
