"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const { id } = useParams();
  return <h1 className="text-2xl">USER PAGE {id}</h1>;
}
