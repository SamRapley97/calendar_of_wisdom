import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main>
    <Link href="/" passHref>
        <button className="navButton">Home</button>
    </Link>
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </main>
  );
}
