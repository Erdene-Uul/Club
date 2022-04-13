import React from "react";
import { Button, Input, Form } from "antd";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Spinner } from "./Spinner";

export default function Contact() {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const onFinish = (e) => {
    setLoading(true);
    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users`, e).then(() => {
      history.push("/");
      alert(
        "Таны мэдээллийг хүлээн авлаав Бид тантай удахгүй холбогдох болно!"
      ).then(() => setLoading(false));
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
          <div className="flex justify-between">
            <Form.Item>
              <Button
                className="rounded-md h-12 w-32 mt-3 bg-blue-600 text-red-50"
                block
                type="primary"
                htmlType="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center disabled:bg-orange-700">
                    <Spinner />
                  </div>
                ) : (
                  <p>Илгээх</p>
                )}
              </Button>
            </Form.Item>
            <Link to="/">
              <Button className="rounded-md h-12 w-32 mt-3 bg-blue-600 text-red-50">
                Буцах
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
