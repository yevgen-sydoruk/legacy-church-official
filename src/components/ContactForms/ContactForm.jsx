"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import clsx from "clsx";

export function ContactForm({ title, text, sentFromPage }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  });

  const onSubmit = async data => {
    setIsLoading(true);

    const payload = { ...data, sentFromPage };

    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Q4n2ql2nqnZVlRlqwv"
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        setIsLoading(false);
        console.log("Response received", res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          toast.success("Thanks for submitting form. We will contact to you soon.", {
            position: "top-right",
            autoClose: 0,
            hideProgressBar: true
          });
        } else {
          setIsLoading(false);
          console.log("Email/Password is invalid.");
          toast.error("Server Issue! please try again later", {
            position: "top-right",
            autoClose: 0,
            hideProgressBar: true
          });
        }
      })
      .catch(error => {
        setIsLoading(false); // Hide loading indicator on API call error
        console.error(error);
      });
    reset();
  };
  return (
    <>
      {/* <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
            alt=""
          />
        </div> */}
      {/* <section className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"> */}
      <section className="pb-24 pt-16 sm:pb-32 sm:pt-24  bg-[#ecf0f1]">
        <div className="max-w-3xl mx-auto  px-6 lg:px-8 items-center justify-center content-center">
          <div className="mx-auto max-w-5xl lg:max-w-2xl text-center">
            <h2 className="sm:text-6xl text-4xl font-light tracking-tight">{title}</h2>
            <p className="mt-5 text-lg font-bold">{text}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 w-full">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                    First Name
                  </label>
                  <input
                    className="mt-2.5 p-2 w-full border-2 border-[#daddde] focus-visible:border-[#3498db] rounded-lg bg-[#daddde] outline-none"
                    type="text"
                    name="firstName"
                    id="firstName"
                    {...register("firstName", { required: true })}
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                    Last Name
                  </label>
                  <input
                    className="mt-2.5 p-2 w-full border-2 border-[#daddde] focus-visible:border-[#3498db] rounded-lg bg-[#daddde] outline-none"
                    type="text"
                    name="lastName"
                    id="lastName"
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  className="mt-2.5 p-2 w-full border-2 border-[#daddde] focus-visible:border-[#3498db] rounded-lg bg-[#daddde] outline-none"
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="">
                <div className="flex justify-between text-sm leading-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                </div>
                <textarea
                  className="mt-2.5 p-2 w-full border-2 border-[#daddde] focus-visible:border-[#3498db] rounded-lg bg-[#daddde] outline-none"
                  id="message"
                  name="message"
                  rows={4}
                  aria-describedby="message-description"
                  {...register("message", { required: true })}
                />
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              {/* <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8"> */}
              <button
                type="submit"
                className={clsx(
                  "inline-flex w-full justify-center items-center rounded-md bg-[#3498db] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  isLoading && "cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* </div> */}
      <ToastContainer />
    </>
  );
}
