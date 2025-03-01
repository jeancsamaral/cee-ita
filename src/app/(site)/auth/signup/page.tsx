import Signup from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Startup Pro",
  description: "This is Sign Up page for Startup Pro",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
