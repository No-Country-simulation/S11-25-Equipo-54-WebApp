"use client";

import Header from "./components/header/Header";
import "../../src/styles/globals.css";
import Register from "./components/register/Register";

export default function Home() {
  return (
    <div>
      <Header />
      <Register />
    </div>
  );
}
