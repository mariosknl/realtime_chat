"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = [
  "dog",
  "cat",
  "bird",
  "fish",
  "horse",
  "rabbit",
  "Snake",
  "tiger",
  "Lion",
  "bear",
  "wolf",
  "fox",
  "elephant",
  "giraffe",
  "zebra",
  "hippo",
  "rhino",
  "leopard",
  "cheetah",
  "jaguar",
  "panther",
  "leopard",
  "cheetah",
  "jaguar",
  "panther",
  "leopard",
  "cheetah",
  "jaguar",
  "panther",
];
const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };

    main();
  }, []);

  return { username };
};
