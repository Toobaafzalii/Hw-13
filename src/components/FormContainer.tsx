import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";

export default function FormContainer() {
  const [values, setValues] = useState([
    {
      value: "",
      name: "company",
      isError: true,
    },
    {
      value: "",
      name: "nature",
      isError: true,
    },
    {
      value: "",
      name: "adress",
      isError: true,
    },
    {
      value: "",
      name: "postcode",
      isError: true,
    },
    {
      value: "",
      name: "contactName",
      isError: true,
    },
    {
      value: "",
      name: "phone",
      isError: true,
    },
    {
      value: "",
      name: "email",
      isError: true,
    },
    {
      value: "",
      name: "linkdin",
      isError: true,
    },
    {
      value: "",
      name: "idea",
      isError: true,
    },
  ]);

  const handleOnChangeText = (
    value: string,
    isError: boolean,
    name: string
  ) => {
    setValues((prevValues) => {
      return prevValues.map((item) => {
        if (item.name === name) {
          return { ...item, isError, value };
        }
        return item;
      });
    });
  };

  const renderButtonDisabled = () => {
    let disbaled = false;
    values.forEach((item) => {
      if (item.isError === true) {
        disbaled = true;
      }
    });
    return disbaled;
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    values.forEach((item) => {
      console.log(item.name, ":", item.value);
    });
  };

  return (
    <div className=" max-w-[1500px] mx-auto">
      <Header />
      <div className="w-full flex justify-between items-start px-52 py-20 ">
        <div className="flex flex-col justify-between items-start gap-5">
          <h1 className="text-5xl font-bold">Contact us</h1>
          <p className="text-md font-semibold text-gray-400 max-w-96 pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            totam sapiente saepe magnam delectus.
          </p>
          <form action="submit" onSubmit={onSubmitHandler}>
            <Input
              validationRule={{ required: true }}
              type="text"
              name="company"
              placeholder="Your Company Name"
              onChangeText={handleOnChangeText}
            />
            <Input
              validationRule={{ required: true }}
              type="text"
              name="nature"
              placeholder="Nature of Bussiness"
              onChangeText={handleOnChangeText}
            />
            <div className="flex justify-between items-center gap-5">
              <Input
                validationRule={{ required: true }}
                type="text"
                name="adress"
                placeholder="Adress"
                onChangeText={handleOnChangeText}
              />
              <Input
                validationRule={{
                  required: true,
                  isNumber: true,
                  minLength: 5,
                }}
                type="text"
                name="postcode"
                placeholder="Postcode"
                onChangeText={handleOnChangeText}
              />
            </div>
            <Input
              validationRule={{ required: true }}
              type="text"
              name="contactName"
              placeholder="Contact Name"
              onChangeText={handleOnChangeText}
            />
            <Input
              validationRule={{ required: true, isNumber: true, minLength: 8 }}
              type="text"
              name="phone"
              placeholder="Contact Phone"
              onChangeText={handleOnChangeText}
            />
            <Input
              validationRule={{ required: true, text: "@gmail.com" }}
              type="email"
              name="email"
              placeholder="Your Email"
              onChangeText={handleOnChangeText}
            />
            <Input
              validationRule={{ required: true }}
              type="text"
              name="linkdin"
              placeholder="Linkdin"
              onChangeText={handleOnChangeText}
            />
            <Input
              validationRule={{ required: true }}
              type="text"
              name="idea"
              placeholder="Let's talk about your idea"
              onChangeText={handleOnChangeText}
            />
            <div className="w-full flex justify-center items-center gap-2 border-4 border-gray-300 border-dashed mt-8 p-16 text-center text-gray-300 text-md font-medium">
              <img className="w-6 h-6" src="./upload-icon.svg" alt="" />
              Upload Additional file
            </div>
            <span className="text-xs text-gray-300">
              {" "}
              Attach file.File size of your documents should not exceed 10MB
            </span>
            <button
              type="submit"
              disabled={renderButtonDisabled()}
              className={
                renderButtonDisabled()
                  ? "w-full text center bg-emerald-200 text-lg font-semibold text-white p-5 mt-4 rounded-md"
                  : "w-full text center bg-green-700 text-lg font-semibold text-white p-5 mt-4 rounded-md hover:shadow-xl"
              }
            >
              SUBMIT
            </button>
            <label className="flex justify-start items-center gap-2 py-2">
              <input type="checkbox" />I want to protct my data by signing an
              NDA
            </label>
          </form>
        </div>
        <div className="flex flex-col justify-between items-start font-normal gap-16 mt-60">
          <section>
            <h3 className="text-lg font-semibold py-4">Offices</h3>
            <p className="py-3">
              United States <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="py-3">
              United Kingdom <br />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="py-3">
              France <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold  py-4">For Quick Inquiries</h3>
            <div className="flex items-center gap-2 py-3">
              <img className="w-7 h-7" src="./united-kingdom.svg" />
              <p>+44 77777777777</p>
            </div>
            <div className="flex items-center gap-2 py-3">
              <img className="w-7 h-7" src="./united-states (1).svg" />
              <p>+1 333333333330</p>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold py-5">
              Would you like to join our newsletter?
            </h3>
            <div className="flex items-end gap-4">
              <input
                className="py-3 px-3 pr-10 border-b-4"
                type="email"
                placeholder="Email"
              />
              <div className="bg-green-700 py-2 px-4 hover:cursor-pointer hover:shadow-xl">
                <img className="w-8 h-8" src="./check.svg" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
