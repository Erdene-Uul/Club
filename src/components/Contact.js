import React from "react";
import { Button, Input, Form } from "antd";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Contact(props) {
  const history = useHistory();
  const baseURL = "http://localhost:9000/api/v1/users";
  const onFinish = (e) => {
    axios.post(baseURL, e).then(() => {
      history.push("/");
      alert(
        "Таны мэдээллийг хүлээн авлаав Бид тантай удахгүй холбогдох болно!"
      );
    });
  };
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#1C1C28]">
      <div className="m-6 flex justify-center border items-center p-8 bg-white flex-col rounded-3xl">
        <h1 className="font-bold mb-3">
          Бидэнтэй холбогдох
          <br />
        </h1>
        <Form onFinish={onFinish}>
          <Form.Item name="name">
            <Input
              className="mb-3 border-2 w-72 h-12 rounded-md px-2 text-sm"
              placeholder="Нэр"
              required
            ></Input>
          </Form.Item>
          <Form.Item name="email">
            <Input
              className="mb-3 border-2 w-72 h-12 rounded-md px-2 text-sm"
              placeholder="Цахим шуудан"
              required
            ></Input>
          </Form.Item>
          <Form.Item name="phone">
            <Input
              className="mb-3 border-2 w-72 h-12 rounded-md px-2 text-sm"
              type="number"
              placeholder="Утасны дугаар"
              required
            ></Input>
          </Form.Item>
          <Form.Item name="about">
            <Input.TextArea
              className=" h-20 w-72 border-2 rounded-md px-2 text-sm placeholder:"
              placeholder="Юуны талаар:"
              required
            ></Input.TextArea>
          </Form.Item>
          <Form.Item>
            <Button
              className="rounded-md px-11 mx-auto h-12 w-full mt-3 bg-blue-600 text-red-50"
              block
              type="primary"
              htmlType="submit"
            >
              Илгээх
            </Button>
          </Form.Item>
          <Link to="/">
            <button className="rounded-md px-11 mx-auto h-12 w-full mt-3 bg-blue-600 text-red-50">
              Буцах
            </button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
