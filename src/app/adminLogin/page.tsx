"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

const Login = () => {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const login = (e: React.FormEvent) => {
    e.preventDefault()
    if (data.email == "admin@gmail.com" && data.password == "Admin@123") {
      localStorage.setItem("auth", "wesite1ghantemenhibantihe");
      router.push("/adminDashboard");
    } else {
      toast({
        variant: "destructive",
        title: "oh No!",
        description: `wrong cradentials`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  // toast({
  //   variant: "destructive",
  //   title: "oh No!",
  //   description: `${error.message}`,
  //   action: <ToastAction altText="Try again">Try again</ToastAction>,
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
                <h1 className="text-xl font-bold">Login as Admin</h1>
                <p className="text-base font-medium">
                  Login with the account you used to signup.
                </p>
              </div>

              <hr />

              <form onSubmit={login} className="space-y-4">
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
                    href="/signup"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                  >
                    Sign up instead?
                  </Link>
                  <Link
                    href="/forgot-password"
                    className="font-medium text-muted-foreground hover:text-gray-600"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <button className="bg-gradient-to-b from-blue-500 to-blue-600 text-white h-10 w-full rounded-md transition hover:shadow-xl">
                  Admin Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
