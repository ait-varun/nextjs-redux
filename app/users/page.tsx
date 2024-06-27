import UsersList from "@/components/usersList";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <Suspense fallback={<Loading />}>
          <UsersList />
        </Suspense>
      </div>
    </>
  );
}
