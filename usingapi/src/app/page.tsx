import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-textBlack pt-11 text-base font-bold">
        <div className="text-xl">Using ResReq API with NextJs</div>
        <Link className="" href="/users">
          <div className="bg-red-400 text-center mt-12 hover:bg-red-600 rounded-lg p-2 hover:text-white">
            Users List
          </div>
        </Link>
      </div>
    </main>
  );
}
