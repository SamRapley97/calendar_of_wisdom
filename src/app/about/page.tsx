import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main>
    <Link href="/" passHref>
        <button className="navButton">Home</button>
    </Link>
      <div className="aboutText">
        <h1 className="dayHeaderText">About</h1>
        <p>This is Lev Tolstoy</p>
        <Image className="aboutImage" src="/tolstoy.jpeg" width={400} height={200} alt="text"></Image>
        <p>You might better know him as the Russian author of such works as Anna Karenina and War and Peace.</p>
        <p>Beyond being an awesome writer however, Tolstoy was a great religious and moral teacher. His later years were marked by a profound commitment to Christian anarchism, pacifism, ascetic living, and vegetarianism.</p>
        <p>The Calendar of Wisdom was Tolstoy's last major project, and one in which he attempted to distill his life's beliefs into a daily dose of wisdom. Each calendar entry includes quotes not just from Tolstoy himself, but also from other historical figures such as Marcus Aurelius, Confucius, and Thoreau.</p>
        <p>I have found the Calendar of Wisdom to be beneficial in helping me to reflect each day, and I hope it might be of some help to you also.</p>
        <p>I have used the Peter Serekin translation of the Calendar of Wisdom, first released in 1997. If you would like an offline version, it can be found online at most major booksellers.</p>
      </div>
    </main>
  );
}
