import Link from "next/link";
import css from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={css.header}>
        <div className={css.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={css.hero}>
          <h1>NextLevel Food for Foodies</h1>
          <p>Taste & share food from all over the world</p>
          <div className={css.cta}>
            <Link href='/community'>Join the community</Link>
            <Link href='/meals'>Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={css.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={css.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
