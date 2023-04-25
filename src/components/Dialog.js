import React, { useState } from "react";
import { Dialog, DialogActions, Button, Paper } from "@mui/material";

import { AiOutlineClose } from "react-icons/ai";

import { styled } from "@mui/material/styles";

import { useForm } from "react-hook-form";

export default function Dialogo({ setShowDialog, showDialog }) {
  const StyledPaper = styled(Paper)`
    background-color: black;
    opacity: 50%;
  `;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Dialog
        open={showDialog}
        disableEscapeKeyDown={false}
        PaperComponent={StyledPaper}
        className="Dialog"
      >
        {/* <div className="h-[200px] w-[200px]">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label>Name</label>
            <input {...register("firstname")} />
            <label>name</label>
            <input {...register("lastname", { required: true })} />
            {errors.lastname && <p> a required feed</p>}
            <label>age</label>
            <input {...register("age", { pattern: /\d+/ })} />
            {errors.age && <p>please enter a number</p>}
            <input type={"submit"}></input>
          </form>
        </div> */}
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            <AiOutlineClose />
          </Button>
        </DialogActions>
        <div className="h-[500px] w-[500px]">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="flex flex-col gap-[40px] justify-center items-center">
              <input
                className=" placeholder:text-white focus-visible:border-b-green-500 focus-visible:outline-none text-white border-red-900 border-b-2 w-[70%] p-2 bg-transparent"
                type="text"
                placeholder="FirstName*"
                {...register("FirstName", { required: true })}
              />
              {errors.FirstName && (
                <p className="text-green-500">FirstName is required</p>
              )}
              <input
                className=" placeholder:text-white focus-visible:border-b-green-500 focus-visible:outline-none text-white border-red-900 border-b-2 w-[70%] p-2 bg-transparent"
                type="text"
                placeholder="LasttName*"
                {...register("LastName", { required: true })}
              />
              {errors.LastName && (
                <p className="text-green-500">LastName is required</p>
              )}
              <input
                className=" placeholder:text-white focus-visible:border-b-green-500 focus-visible:outline-none text-white border-red-900 border-b-2 w-[70%] p-2 bg-transparent"
                type="text"
                placeholder="FileName*"
                {...register("FileName", { required: true })}
              />
              {errors.FileName && (
                <p className="text-green-500">FileName is required</p>
              )}
              <input
                className=" placeholder:text-white focus-visible:border-b-green-500 focus-visible:outline-none text-white border-red-900 border-b-2 w-[70%] p-2 bg-transparent"
                type="text"
                placeholder="FileKey*"
                size="4"
                maxLength="4"
                minLength="4"
                {...register("FileKey", { required: true })}
              />
              {errors.FileKey && (
                <p className="text-green-500">
                  You need to assign a key to your file
                </p>
              )}
              <input
                className="text-white ml-[90px] file:rounded-[5px] file:hover:cursor-pointer "
                type="file"
                id="myFile"
                name="filename"
                {...register("filename", { required: true })}
              ></input>
              {errors.filename && <p>You have not select a file</p>}
              <button
                className="text-white rounded-full mb-6 bg-[#456A76] h-[50px] w-[90px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
