"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-mail";
import { useLanguage } from "@/app/components/LangaugeContext";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const myModal = useRef<HTMLDialogElement>(null)
  const isEnglish = useLanguage();
  const { register, handleSubmit, resetField } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
    resetField("name");
    resetField("email");
    resetField("message");
  }

  return (
    <div className="flex flex-col bg-[#ece3ca] min-h-[80vh] h-auto py-10 justify-center gap-5">
      <div className="w-[80%] mx-auto">
        <p className="mb-5">
          {isEnglish
            ? "I would be delighted to have a chat about me, you, technologies, football, beer or whatever you fancy. Either drop me an email or just give me a"
            : "Je serais ravi de discuter de ma situation, de vous, des technologies, du football, de la bière ou de tout autre sujet qui vous intéresse. Envoyez-moi un message ou"}
          <button 
            className="badge badge-primary ml-3"
            onClick={() => myModal.current?.showModal()}
          >
            {isEnglish ? "call" : "appelez-moi"}
          </button>
        </p>

        <dialog ref={myModal} id="my_modal_2" className="modal">
          <div className="modal-box">
            <div className="flex">
              <h1>06 02 52 86 50</h1>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[25rem] flex flex-col m-auto"
        >
          <label className="input input-bordered flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder={isEnglish ? "Full name" : "Votre nom et prénom"}
              {...register("name", { required: true })}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          <textarea
            className="textarea textarea-primary w-full mb-5"
            placeholder={isEnglish? "Write your message here...": "Ecrivez votre message ici"}
            {...register("message", { required: true })}
          ></textarea>
          <button className="btn btn-primary">{isEnglish? "Let's get in touch":"Entrons en contact"}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
