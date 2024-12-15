import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Login from "./login/page"

export default function Home() {
  const supabase = createClient();

  const setNewView = async () => {
    const { data, error } = await supabase.from("supabasetask1").select();

    console.log("ayush patel");

    if (data) console.log(data);
    if (error) console.log(error);
  };
  setNewView();

  return (
      <Login/>
  );
}
