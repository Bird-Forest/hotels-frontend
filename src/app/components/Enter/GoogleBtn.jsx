// import { useSearchParams } from "next/navigation";
import { signIn } from "../../config/auth";
import { FcGoogle } from "react-icons/fc";
import styles from "./GoogleBtn.module.css";

export function GoogleBtn() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl" || "/hotels");
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/hotels" });
      }}
      className={styles.form}
    >
      <button type="submit" className={styles.googlebtn}>
        <FcGoogle className={styles.googleicon} />
        Signin with Google
      </button>
    </form>
  );
}
