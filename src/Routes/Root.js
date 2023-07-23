import { Children } from "react";
// import FetchInfo from "../components/Fetch-info";

export default function Root() {
  return (
    <>
      <main>
        <div><p>Voici le contenu principal de la page "Root" </p></div>
        <div>
          {Children}
        </div>
      </main>
      </>
      );
}