import React, { useRef, useState } from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import Label from "../../components/form/Label";
import PageMeta from "../../components/common/PageMeta";

export default function TwoStepVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    // Update the state with the new value
    setOtp(updatedOtp);

    // Automatically move to the next input if a value is entered
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      const updatedOtp = [...otp];

      // If current input is empty, move focus to the previous input
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }

      // Clear the current input
      updatedOtp[index] = "";
      setOtp(updatedOtp);
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    }

    if (event.key === "ArrowRight" && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Get the pasted text
    const pasteData = event.clipboardData.getData("text").slice(0, 6).split("");

    // Update OTP with the pasted data
    const updatedOtp = [...otp];
    pasteData.forEach((char, idx) => {
      if (idx < updatedOtp.length) {
        updatedOtp[idx] = char;
      }
    });

    setOtp(updatedOtp);

    // Focus the last filled input
    const filledIndex = pasteData.length - 1;
    if (inputsRef.current[filledIndex]) {
      inputsRef.current[filledIndex].focus();
    }
  };

  const handleSubmit = () => {
    alert(`Submitted OTP: ${otp.join("")}`);
  };
  return (
    <>
      <PageMeta
        title="React.js Two Step Verification Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Two Step Verification Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="relative flex w-full h-screen overflow-hidden z-1">
        <div className="flex flex-1 flex-col bg-white p-6 dark:bg-white/[0.03] sm:p-8">
          <div className="w-full max-w-md pt-10 mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <svg
                className="stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to dashboard
            </Link>
          </div>
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Two Step Verification
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A verification code has been sent to your mobile. Please enter
                it in the field below.
              </p>
            </div>
            <div>
              <form>
                <div className="space-y-5">
                  {/* <!-- Email --> */}
                  <div>
                    <Label>Type your 6 digits security code</Label>
                    <div className="flex gap-2 sm:gap-4" id="otp-container">
                      {otp.map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={otp[index]}
                          onChange={(e) => handleChange(e.target.value, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onPaste={(e) => handlePaste(e)}
                          ref={(el) => (inputsRef.current[index] = el!)} // Assign input refs
                          className="dark:bg-dark-900 otp-input h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-center text-xl font-semibold text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                      ))}
                    </div>
                  </div>

                  {/* <!-- Button --> */}
                  <div>
                    <button
                      onClick={handleSubmit}
                      className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                    >
                      Verify My Account
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-5">
                <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                  Didn’t get the code?{" "}
                  <Link
                    to="/"
                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Resend
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center justify-center flex-1 hidden p-8 z-1 bg-brand-950 dark:bg-white/5 lg:flex">
          {/* <!-- ===== Common Grid Shape Start ===== --> */}
          <GridShape />
          {/* <!-- ===== Common Grid Shape End ===== --> */}
          <div className="flex flex-col items-center max-w-xs">
            <Link to="/" className="block mb-4">
              <img src="/images/logo/auth-logo.svg" alt="Logo" />
            </Link>
            <p className="text-center text-gray-400 dark:text-white/60">
              Free and Open-Source Tailwind CSS Admin Dashboard Template
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
