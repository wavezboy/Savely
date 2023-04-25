import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogActions, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AiOutlineClose } from "react-icons/ai";

export default function DowloadDialog({
  setShowDownloadDialog,
  showDownloadDialog,
}) {
  const StyledPaper = styled(Paper)`
    background-color: black;
    opacity: 50%;
  `;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(showDownloadDialog);

  return (
    <div>
      <Dialog
        open={showDownloadDialog}
        disableEscapeKeyDown={false}
        PaperComponent={StyledPaper}
        className="Dialog"
      >
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setShowDownloadDialog(false);
            }}
          >
            <AiOutlineClose />
          </Button>
        </DialogActions>
        <div className="h-[200px] w-[200px]">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="flex flex-col gap-[40px] justify-center items-center">
              <input
                className=" placeholder:text-white focus-visible:border-b-green-500 focus-visible:outline-none text-white border-red-900 border-b-2 w-[70%] p-2 bg-transparent"
                type="text"
                placeholder="Enter-FileKey*"
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

              <button
                className="text-white rounded-full mb-6 bg-[#456A76] h-[50px] w-[90px]"
                type="submit"
              >
                Open File
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
