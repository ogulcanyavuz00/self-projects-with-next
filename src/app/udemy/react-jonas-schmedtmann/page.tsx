"use client";
import { useState, useEffect } from "react";

import { Metadata } from "next";
import { ShowTime } from "./components/1-ShowTime/ShowTime";
import { PizzaMenuPage } from "./components/2-PizzaMenuPage/PizzaMenuPage";
import {
  UseEffectLesson1,
  UseEffectLesson2,
  UseEffectLessonHover,
} from "./components/2-PizzaMenuPage/UseEffectStudies";

export const metadata: Metadata = {
  title: "React - Jonas Schmedtmann",
};

export default function ReactJonasSchmedtmannMain() {
  return <PizzaMenuPage />;
  // return <UseEffectLesson1 />;
  // return <UseEffectLesson2 />;
  // return <UseEffectLessonHover />;
}
