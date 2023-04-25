import React from "react";
import Arrow from "../svgs/arroww";
import Dialogo from "./Dialog";
import DowloadDialog from "./DowloadDialog";
import { useForm } from "react-hook-form";
import map from "../assets/img/pngwing 1.png";

export default function Hero() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = React.useState(false);
  React.useEffect(() => {}, [showDialog, showDownloadDialog]);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  return (
    <div className=" relative bg-fixed">
      <div className="flex justify-around h-[50px] w-full bg-[#D4E0D3
      ]  gap-[118px]">
        <div>
          <p className="text-[27.7px] font-primary font-bold text-[#323232] ">
            SAVELY.
          </p>
        </div>
        <div className="flex items-center gap-[23px]">
          <div className="flex items-center gap-[4px]">
            <p className="font-secondary font-bold tracking-wider text-[13.71px]">
              Home
            </p>
            <div>
              <Arrow />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-secondary tracking-wider font-bold text-[13.71px]">
              About
            </p>
            <div>
              <Arrow />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-secondary font-bold tracking-wider text-[13.71px]">
              Features
            </p>
            <div>
              <Arrow />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-secondary font-bold tracking-wider text-[13.71px]">
              Pricing
            </p>
            <div>
              <Arrow />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-secondary font-bold text-[13.71px]">
              Getting Started
            </p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-[150px] mt-[80px] justify-center mb-[70px] items-center">
        <div className="">
          <p className=" font-secondary leading-[126%] w-[400px] font-bold text-[42px] text-[#455A64]">
            Save text, voice, photos, notes and GIFs files for free
          </p>
          <h2 className="font-secondary mt-[17px] text-[16.67px] font-medium text-[#535359] w-[449px]">
            Feugiat primis a ligula undo auctor mauris auctor laoreet and
            pretium augue an egestas cubilia
          </h2>
          <div className="flex items-center gap-[20px]">
            <div>
              <button
                className="bg-[#456A76] text-[14.13px] text-white mt-[16px] flex items-center justify-center rounded-[4px] w-[131px] h-[39px]"
                onClick={() => {
                  setShowDialog(true);
                }}
              >
                Save a file
              </button>
            </div>
            <button
              className="bg-[#456A76]  text-[14.13px] text-white mt-[16px] flex items-center justify-center rounded-[4px] w-[170px] h-[39px]"
              onClick={() => {
                setShowDownloadDialog(true);
              }}
            >
              Download a file
            </button>
          </div>
          <p className="font-secondary font-bold text-[12.46px] text-[#455A64] mt-[26px]">
            14 days free trial &#160;|&nbsp; No credit card
          </p>
        </div>
        <div className="h-[] w-[]">
          <div>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col">
                  {" "}
                  <label
                    className="font-secondary font-normal text-[16px]"
                    htmlFor=""
                  >
                    Full name
                  </label>
                  <input
                    className=" placeholder:text-[#CCCCCC] font-secondary rounded-[4px] text-black border-[#CCCCCC] border-2 w-[400px] p-2 bg-[#f1eeee]"
                    type="text"
                    placeholder="AbdulFattah Oladayo*"
                    {...register("FirstName", { required: true })}
                  />
                  {errors.FirstName && (
                    <p className="text-[#a1a1a1]">FirstName is required</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-secondary font-normal text-[16px]"
                    htmlFor=""
                  >
                    File name
                  </label>
                  <input
                    className=" placeholder:text-[#CCCCCC] font-secondary rounded-[4px] text-black border-[#CCCCCC] border-2 w-[400px] p-2 bg-[#f1eeee]"
                    type="text"
                    placeholder="FileName*"
                    {...register("FileName", { required: true })}
                  />
                  {errors.FileName && (
                    <p className="text-[#a1a1a1]">FileName is required</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-secondary font-normal text-[16px]"
                    htmlFor=""
                  >
                    File key
                  </label>
                  <input
                    className=" placeholder:text-[#CCCCCC] font-secondary rounded-[4px] text-black border-[#CCCCCC] border-2 w-[400px] p-2 bg-[#f1eeee]"
                    type="text"
                    placeholder="FileKey*"
                    size="4"
                    maxLength="4"
                    minLength="4"
                    {...register("FileKey", { required: true })}
                  />
                  {errors.FileKey && (
                    <p className="text-[#a1a1a1]">
                      You need to assign a key to your file
                    </p>
                  )}
                </div>

                <button
                  className="text-white mb-6 bg-[#456A76] font-secondary h-[50px] rounded-[4px] w-[400px]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 w-full opacity-[90%] h-[670px] -z-10"
        src={map}
        alt=""
      />
      {showDialog && (
        <Dialogo setShowDialog={setShowDialog} showDialog={showDialog} />
      )}
      {showDownloadDialog && (
        <DowloadDialog
          setShowDownloadDialog={setShowDownloadDialog}
          showDownloadDialog={showDownloadDialog}
        />
      )}
    </div>
  );
}
