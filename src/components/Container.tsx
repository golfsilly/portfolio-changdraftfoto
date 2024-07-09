import React from "react";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex flex-col w-full min-h-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {children}
    </main>
  );
}
