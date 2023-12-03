import { Button } from "@/components/ui/button";
import React from "react";
import UserForm from "./_components/form";

export default function Page() {
  return (
    <div className="container">
      <h1>TopPage</h1>
      <Button variant={"outline"}>ログイン</Button>
      <Button>新規登録</Button>
      <UserForm />
    </div>
  );
}
