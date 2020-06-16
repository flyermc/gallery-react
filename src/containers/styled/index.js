import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  max-width: 900px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 90px);
  column-gap: 10px;
  row-gap: 10px;
`;

export const StyledItem = styled.div`
  overflow: hidden;

  ${({ number }) => ({
    0: css`
      grid-column: 1/4;
      grid-row: 1/4;
      border-radius: 2px;
    `,
    1: css`
      grid-column: 4/7;
      grid-row: 1/4;
      border-radius: 2px;
    `,
    2: css`
      grid-column: 7/11;
      grid-row: 1/4;
      border-radius: 2px;
    `,
    3: css`
      grid-column: 1/5;
      grid-row: 4/7;
      text-align: left;
      border-radius: 2px;
    `,
    4: css`
      grid-column: 5/8;
      grid-row: 4/7;
      text-align: right;
      border-radius: 2px;
    `,
    5: css`
      grid-column: 8/11;
      grid-row: 4/7;
      text-align: right;
      border-radius: 2px;
    `,
    })[number]
  };
`;
