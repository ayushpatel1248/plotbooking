'use client'
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client";
import {useRouter} from "next/navigation"
const Authenticated = () => {
  const supabase = createClient();
  const router = useRouter();

   const signout = async ()=>{
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log("Error during logout:", error.message);
      } else {
        console.log("Logged out successfully");
        router.push("/login")
      }
    } catch (err) {
      console.log("Unexpected error:", err);
    }
   }

  return (
    <div className="flex min-h-screen justify-center items-center bg-white dark:text-black">
        <h1  className="font-extrabold size">authenticated successfully</h1>
        <Button onClick={signout}> logout </Button>
    </div>
  )
}

export default Authenticated