"use client";
import { signIn } from "next-auth/react";

export default function Page() {
  const hadnleSignin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };
  return <button onClick={hadnleSignin}>signin</button>;
}
