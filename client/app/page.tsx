import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-between gap-8">
        <h1>Home page</h1>
        <ModeToggle />
      </div>
      <Link href={"/admin"}>
        <Button>Admin</Button>
      </Link>
    </div>
  );
}
