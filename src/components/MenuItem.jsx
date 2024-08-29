import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address }) {
  return <Link href={address}>{title}</Link>;
}
