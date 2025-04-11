"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/melqui-donalds");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-black px-6 py-12 text-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
          Bem-vindo ao <span className="text-purple-400">Melqui Donald's</span>
        </h1>
        <p className="mb-8 text-lg font-medium md:text-xl">
          A fome bateu? Confere nosso cardápio e descobre o melhor lanche da
          região!
        </p>
        <button
          onClick={handleRedirect}
          className="rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-purple-700"
        >
          Ver Cardápio 🍔
        </button>
      </div>

      <footer className="mt-12 text-sm text-purple-300">
        © {new Date().getFullYear()} Melqui Donald's. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
