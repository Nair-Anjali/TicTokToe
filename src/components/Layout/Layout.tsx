/**
 * using style components designing the rows and columns
 * takes in props that is the space that needs to be added against each cell
 *  @author anjaliNair
 *  @since 16 July 2022
 *
 */
import styled from 'styled-components';
import { LayoutProps } from './LayoutProps';

export const Row = styled.div<LayoutProps> `
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.space}px;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.space}px;
`;
