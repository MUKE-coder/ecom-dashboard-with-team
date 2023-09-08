import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <h2 className="text-3xl">Welcome to the Ecommerce Frontend</h2>
      <Link href="/product">Product Page</Link>
    </section>
  );
}
