import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { ChapterTwo } from "../modules/chapter-2/ChapterTwo";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
        <Route index element={<ChapterTwo/>} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h1>Ini home looo…</h1>;
};
