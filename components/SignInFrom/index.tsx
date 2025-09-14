import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignInFrom() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Signin with GitHub</Button>
    </form>
  );
}
