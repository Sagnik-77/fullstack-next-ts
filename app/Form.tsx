"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res);
  }
  return (
    <form className="flex gap-5" onSubmit={submitPost}>
      <input
        className="rounded-md px-5 text-black border-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button
        className="bg-teal-500 text-black text-lg font-medium py-4 px-8 rounded-md"
        type="submit"
      >
        POST
      </button>
    </form>
  );
}
