import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-3xl glass p-8 text-center">
        <h1 className="text-3xl font-extrabold">Application Received</h1>
        <p className="mt-3 text-slate-300">
          Thanks for reaching out. The coaching staff will review your application
          and respond by email.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex justify-center px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
