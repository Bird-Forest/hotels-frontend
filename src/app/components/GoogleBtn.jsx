// import { useSearchParams } from "next/navigation";
import { signIn } from "../config/auth";

export function GoogleBtn() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl" || "/hotels");
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/hotels" });
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
