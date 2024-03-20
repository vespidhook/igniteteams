import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import React from "react";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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

        <Input />

        <Button 
          title="Criar grupo"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}