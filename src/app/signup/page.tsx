"use client";

import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Signup() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const { toast } = useToast();

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data: dataUser, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      console.log(dataUser);
      if (!error) {
        console.log("inside if condition");
        console.log(data);
        router.push("/allplot");
      }
      if (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "oh No!",
          description: `${error.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: "destructive",
        title: "oh No!",
        description: `${err}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900">
      
      <div
        className="grid h-full dark:bg-gray-900/20"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="row-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-1">
          <div className="flex flex-col items-center justify-center h-screen text-center space-y-8">
            <div className="min-w-48 h-full max-w-lg mx-auto text-left grid items-center overflow-auto">
              <div className="space-y-8">
                <div className="flex flex-col items-start gap-0 w-[320px]">
                  <h1 className="text-xl font-bold">
                    SignUP to plot booking
                  </h1>
                  <p className="text-base font-medium">
                    create new account
                  </p>
                </div>

                <hr />

                <form onSubmit={signup} className="space-y-4" >
                  <label
                    htmlFor="password-email"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Type your email"
                    className="block w-full rounded-md border bg-gray-50 dark:bg-gray-800/20 h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      placeholder="Type your password"
                      className="block w-full rounded-md border bg-gray-50 dark:bg-gray-800/20 h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <Link
                      href="/login"
                      className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                    >
                      Sign In instead?
                    </Link>
                  </div>

                  <button
                    className="bg-gradient-to-b from-blue-500 to-blue-600 text-white h-10 w-full rounded-md transition hover:shadow-xl"
                  >
                    SignUp
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
        <Toaster />
      </div>
      <Toaster />
    </div>
  );
}
