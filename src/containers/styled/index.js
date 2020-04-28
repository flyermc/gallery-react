import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: minmax(100px, auto);
  column-gap: 5px;
  row-gap: 5px;
`;

export const StyledItem = styled.div`
  ${({ number }) => ({
    1: css`
      grid-column: 1 / 3;
      grid-row: 1;
    `,
    2: css`
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    `,
    3: css`
      grid-column: 1;
      grid-row: 2 / 5;
    `,
    4: css`
      grid-column: 3;
      grid-row: 3;
    `
    })[number]
  };
`;
