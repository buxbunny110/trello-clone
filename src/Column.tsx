import { ColumnContainer, ColumnTitle } from "./styles";
import { PropsWithChildren } from "react";

type ColumnProps = PropsWithChildren<{
  title: string
}>

export const Column = ({ title, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}