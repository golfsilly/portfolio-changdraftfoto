import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {

  return (
    <main className="min-h-screen grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Image
          src="/images/logomoph.png"
          width={100}
          height={100}
          alt="logo"
          blurDataURL="URL"
          placeholder="blur"
          className="flex mx-auto mb-5"
        />
        <p className="text-4xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Detail Not Found
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
