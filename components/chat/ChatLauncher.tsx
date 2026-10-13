"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import ChatPanel from "./ChatPanel";
import MiniBrainard from "./MiniBrainard";

const GREETING_DELAY_MS = 1200;

/** Floating Mini Brainard button that opens the guided portfolio chat. */
const ChatLauncher = () => {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), GREETING_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const openChat = () => {
    setShowGreeting(false);
    setOpen(true);
  };
  const closeChat = useCallback(() => setOpen(false), []);

  return (
    <>
      {open && <ChatPanel onClose={closeChat} />}

      {!open && showGreeting && (
        <div className="fixed bottom-24 right-6 z-50 flex max-w-[240px] items-start gap-2 rounded-2xl rounded-br-sm glass-strong px-4 py-3 text-sm shadow-lg animate-fade-in-up">
          <button type="button" onClick={openChat} className="text-left">
            Hi! I&apos;m Mini Brainard — ask me anything about the real one 👋
          </button>
          <button
            type="button"
            onClick={() => setShowGreeting(false)}
            aria-label="Dismiss greeting"
            className="opacity-60 hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={open ? closeChat : openChat}
        aria-label={open ? "Close chat" : "Chat with Mini Brainard"}
        aria-expanded={open}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg shadow-pink-500/30 transition-transform hover:scale-110 ${open ? "hidden sm:block" : ""}`}
      >
        <MiniBrainard size={64} wave={!open} />
      </button>
    </>
  );
};

export default ChatLauncher;
