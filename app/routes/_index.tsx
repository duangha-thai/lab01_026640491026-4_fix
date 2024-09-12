import type { MetaFunction } from "@remix-run/node";
import { books } from "./data";
import BookSeller from "./book";

export const meta: MetaFunction = () => {
  return [
    { title: "Duanghathai Yarangpai" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <BookSeller />
    </>
  );
};