import { Suspense } from "react";
import Link from "next/link";

import css from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

import { getMeals } from "@/lib/meals";

import LoadingPage from "../../components/loading/loading-out";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
  ``;
}

export default async function MealsPage() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Delicious meals, created
          <span className={css.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={css.cta}>
          <Link href='/meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={css.main}>
        <Suspense fallback={<LoadingPage>Meals Loading Page</LoadingPage>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
