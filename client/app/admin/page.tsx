"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function page() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userSession = session?.session;

  const handlelogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
        },
        onError: (error) => {
          console.error("Error logging out", error);
          toast.error("Error logging out");
        },
      },
    });
  };
  return (
    <div className="flex flex-col gap-8 space-y-8">
      <h1 className="text-4xl">This is the admin page</h1>

      <>
        {userSession ? (
          <>
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading ...</span>
              </>
            ) : (
              <div className="flex flex-col space-y-16">
                {user?.name}
                <Button onClick={handlelogOut}>Log Out</Button>
              </div>
            )}
          </>
        ) : (
          <Link href={"/login"}>
            <Button>Log In</Button>
          </Link>
        )}
      </>
    </div>
  );
}
