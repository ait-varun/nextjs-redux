import UsersList from "@/components/usersList";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <>
      <div className="container mx-auto  py-8">
        <h1 className="text-3xl font-bold mx-4">Users</h1>
        <div className="mx-4">
          {" "}
          <Suspense fallback={<Loading />}>
            <UsersList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
