import React, { useEffect } from "react";
import styled from "styled-components";
import storedImge1 from "../../assets/login1.webp";
import storedImge2 from "../../assets/login2.jpg";
import storedImge3 from "../../assets/login3.jpg";
import storedImge4 from "../../assets/login4.avif";
import storedImge5 from "../../assets/login5.jfif";
import storedImge6 from "../../assets/login6.jpg";
import storedImge7 from "../../assets/login7.jfif";
import logo from "../../assets/logo.png";
import { Button, Image, Text, TextInput } from "@mantine/core";
import {
  IconEye,
  IconMailBolt,
  IconRecordMail,
  IconRecordMailOff,
} from "@tabler/icons-react";
import { Colors } from "/src/utils/colors";
import LoginCarousel from "./Slider1";
import adminAuthStore from "/src/mobx/adminstore";
import { DASHBOARD_ROUTE } from "/src/routes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { yupResolver } from "mantine-form-yup-resolver";

import { useForm } from "@mantine/form";
// Main container for the page
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.brandRed};
`;

// Wrapper for the login form and image
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  overflow: hidden;
  background-color: ${Colors.brandRed};
`;

// Login form container on the left
const LoginForm = styled.form`
  width: 40%;
  min-height: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${Colors.white};
`;

// Image container on the right
export const ImageContainer1 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge1}) center/contain no-repeat;
`;

export const ImageContainer2 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge2}) center/contain no-repeat;
`;

export const ImageContainer3 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge3}) center/contain no-repeat;
`;

export const ImageContainer4 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge4}) center/contain no-repeat;
`;

export const ImageContainer5 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge5}) center/contain no-repeat;
`;

export const ImageContainer6 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge6}) center/contain no-repeat;
`;

export const ImageContainer7 = styled.div`
  /* flex: 1; */
  width: 100%;
  height: 80%;
  background: url(${storedImge7}) center/contain no-repeat;
`;
// Styled input
const Input = styled(TextInput)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  outline: none;
`;

// Styled button
const ButtonA = styled(Button)`
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${Colors.brandRed};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.crimson};
  }
`;

const LoginComponent = () => {
  const navigate = useNavigate();

  const LoginSchema = yup.object().shape({
    password: yup.string("Password is must be a string"),
    email: yup.string().max(255).email("Please provide a valid email"),
  });
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(LoginSchema),
  });

  const handleSubmit = async (values) => {
    const result = await adminAuthStore.loginAdmin(values);

    if (result && result?.success) {
      toast.success("Login was successful");
      navigate(DASHBOARD_ROUTE);
    }
    if (result?.response?.data?.error?.message) {
      toast.error(result?.response?.data?.error?.message);
    }
  };

  useEffect(() => {
    adminAuthStore.checkAuthStatus();

    if (adminAuthStore.isAuth) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [navigate]);
  return (
    <Container>
      <Wrapper>
        <LoginForm onSubmit={form.onSubmit(handleSubmit)}>
          <Image w={100} sizes="xs" src={logo} alt="Match Book logo" />
          <Text fz={25} fw={"normal"} ff={"Satoshi"} mt={10}>
            Welcome back
          </Text>
          <Text ff={"Carena"} fz={40} fw={"bolder"}>
            Match Book
          </Text>
          <Text fz={16} ff={"Satoshi"} mb={"md"}>
            Provide your credentials to access your account
          </Text>
          <Input
            rightSection={<IconMailBolt color={Colors.black} />}
            style={{ width: "100%" }}
            mt="xs"
            // disabled={true}
            placeholder="Enter customer Email"
            radius={5}
            size={"lg"}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <Input
            rightSection={<IconEye color={Colors.black} />}
            style={{ width: "100%" }}
            mt="xs"
            // disabled={true}
            radius={5}
            size={"lg"}
            type="password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <ButtonA type="submit" size={"lg"}>
            Login
          </ButtonA>
        </LoginForm>
        <LoginCarousel />
        {/* <ImageContainer /> */}
      </Wrapper>
    </Container>
  );
};

export default LoginComponent;
