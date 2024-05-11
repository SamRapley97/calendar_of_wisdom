import Image from "next/image";
import type { Metadata } from "next";
import Link from 'next/link'
import Dropdown from "./components/DropdownButton";

export const metadata: Metadata = {
    title: "Calendar of Wisdom",
    description: "A daily dose of wisdom curated by Tolstoy",
};


export default function Home() {
  return (
    <main>
      <section className="buttonGroup">
        <Link href="/about" passHref>
        <button className="navButton">
          About
        </button>
        </Link>
        <Dropdown></Dropdown>
      </section>

      <div className="textContent">
        <p className="quote">"Better to know a few things which are good and necessary than many things which are useless and mediocre."</p>
        <p className="author">Tolstoy</p>
        <p className="quote">"What a great treasure can be hidden in a small, selected library! A company of the wisest and the most deserving people from all the civilized countries of the world, for thousands of years, can make the results of their studies and their wisdom available to us. The thought which they might not even reveal to their best friends is written here in clear words for us, people from another century. Yes, we should be grateful for the best books, for the best spir­itual achievements in our lives."</p>
        <p className="author">Ralph Waldo Emerson</p>
        <p className="quote">"There are too many mediocre books which exist just to entertain your mind. Therefore, read only those books which are accepted without doubt as good."</p>
        <p className="author">Lucius Annaeus Seneca</p>
        <p className="quote">"Read the best books first, otherwise you’ll find you do not have time."</p>
        <p className="author">Henry David Thoreau</p>
        <p className="quote">"The difference between real material poison and intellectual poison is that most material poison is disgusting to the taste, but intellectual poison, which takes the form of cheap newspapers or bad books, can unfortunately sometimes be attractive."</p>
        <p className="author">Tolstoy</p>
      </div>
    </main>
  );
}
