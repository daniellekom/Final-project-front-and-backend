import React, { useState } from "react";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;

const Create = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("");
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const onRequiredTypeChange = () => {
    setRequiredMarkType();
  };
 

  return (
    <div className="container">
      <Form
        className="create"
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
      >
        <Form.Item label="Title">
          <Input
            showCount
            maxLength={20}
            onChange={onChange}
            autoSize={{ minRows: 1, maxRows: 1 }}
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            showCount
            maxLength={50}
            onChange={onChange}
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item  label="Looking for">
          <TextArea
            showCount
            maxLength={50}
            onChange={onChange}
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item className="button">
        <Button  href="/board" >
          Create
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};



export default Create;
