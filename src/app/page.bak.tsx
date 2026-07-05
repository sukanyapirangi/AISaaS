import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Show when="signed-out">
        <div className="flex gap-4">
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>
        </div>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </main>
  );
}