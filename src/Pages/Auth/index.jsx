import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Tabs } from "antd";

const Auth = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register />,
    },
  ];
  return (
    <div className="w-4/5 mx-auto h-[600px]">
      <Tabs
        defaultActiveKey="1"
        centered={true}
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Auth;
