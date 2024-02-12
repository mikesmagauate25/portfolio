"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col mt-20 gap-10 mb-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <p className="font-helvetica font-semibold text-3xl">
          What should I call you?*
        </p>
        <input
          {...register("name", { required: true })}
          className="w-full mt-3 focus:outline-slate-400"
          type="text"
          placeholder="Name"
        />
      </div>

      <div>
        <p className="font-helvetica font-semibold text-3xl">
          Whats the best email to reach you?*
        </p>
        <input
          {...register("email", { required: true })}
          className="w-full mt-3 focus:outline-slate-400"
          type="email"
          placeholder="Email"
        />
      </div>

      <div>
        <p className="font-helvetica font-semibold text-3xl">
          Feel free to sprinkle your message magic!*
        </p>
        <textarea
          {...register("message", { required: true })}
          className="w-full mt-3 focus:outline-slate-400"
          placeholder="Message"
        />
      </div>

      <button
        className="w-60 rounded-full h-10 bg-black text-white"
        type="submit"
      >
        Lets do it
      </button>
    </form>
  );
};

export default Form;
