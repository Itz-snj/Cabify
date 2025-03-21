import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { loginUser } from "../../api/api";

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      if (response?.token) {
        toast.success("Login successful! Redirecting...");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Invalid credentials, please try again!");
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "blur(8px)",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
            Welcome Back
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
            Login to access your account
          </p>
          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                id="email"
                placeholder="example@domain.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password", { required: true, minLength: 6 })}
                id="password"
                placeholder="Password"
                type="password"
              />
            </LabelInputContainer>
            <button
              className="bg-black text-white w-full rounded-md h-10 font-medium hover:bg-gray-800 transition"
              type="submit"
            >
              Login &rarr;
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default UserLogin;
