import { useCallback, useEffect, useRef, useState } from "react";
import { buildAnswer } from "@/lib/chat/buildAnswer";
import { ChatAnswer, ChatOption } from "@/lib/chat/types";

export type ChatEntry =
  | { id: number; from: "bot"; answer: ChatAnswer }
  | { id: number; from: "visitor"; text: string };

const TYPING_DELAY_MS = 400;

const greeting = (): ChatEntry => {
  const menu = buildAnswer("menu");
  return {
    id: 0,
    from: "bot",
    answer: {
      ...menu,
      paragraphs: [
        "Hi! I'm Mini Brainard — ask me anything about the real one 👋",
        ...menu.paragraphs,
      ],
    },
  };
};

/** Holds the transcript and plays the bot's reply after a short "typing…" pause. */
export const useChat = () => {
  const [entries, setEntries] = useState<ChatEntry[]>(() => [greeting()]);
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const choose = useCallback(
    (option: ChatOption) => {
      if (typing) return;
      setEntries((current) => [
        ...current,
        { id: nextId.current++, from: "visitor", text: option.label },
      ]);
      setTyping(true);
      timer.current = setTimeout(() => {
        setEntries((current) => [
          ...current,
          { id: nextId.current++, from: "bot", answer: buildAnswer(option.nodeId) },
        ]);
        setTyping(false);
      }, TYPING_DELAY_MS);
    },
    [typing]
  );

  return { entries, typing, choose };
};
