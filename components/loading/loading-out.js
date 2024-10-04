import css from "./loading.module.css";

export default function LoadingPage({ children }) {
  return <p className={css.loading}>{children}</p>;
}
