import Navbar from "@/components/custom/navbar";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    return (
      <>
        <Navbar></Navbar>
        <h1>Pls Login </h1>
      </>
    );
  }
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
