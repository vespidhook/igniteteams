import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import React from "react";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup(){
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Crie um grupo"
          subtitle="Converse com seus amigos"
        />

        <Button 
          title="Criar grupo"
        />
      </Content>
    </Container>
  )
}