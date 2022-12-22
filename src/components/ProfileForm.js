import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const ProfileForm = () => {
  return (
    <Wrapper>
      <Input name="Фамилия " />
      <Input name="Имя " />
      <Input name="Никнейм " />
      <Button name="Сохранить" />
    </Wrapper>
  );
};

export default ProfileForm;

const Wrapper = styled.section``;
