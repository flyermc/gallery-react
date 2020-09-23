import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  height: 72vh;
  width: 85vw;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 12vh);
  column-gap: 5px;
  row-gap: 5px;
`;

export const StyledItem = styled.div`
  overflow: hidden;
  border-radius: 1px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  ${({ number }) => ({
    0: css`
      grid-column: 1/4;
      grid-row: 1/4;
    `,
    1: css`
      grid-column: 4/7;
      grid-row: 1/4;
    `,
    2: css`
      grid-column: 7/11;
      grid-row: 1/4;
    `,
    3: css`
      grid-column: 1/5;
      grid-row: 4/7;
    `,
    4: css`
      grid-column: 5/8;
      grid-row: 4/7;
    `,
    5: css`
      grid-column: 8/11;
      grid-row: 4/7;
    `,
    })[number]
  };
`;
