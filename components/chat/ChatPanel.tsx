import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { BotMessage, VisitorMessage } from "./ChatMessage";
import MiniBrainard from "./MiniBrainard";
import { useChat } from "./useChat";

interface ChatPanelProps {
  onClose: () => void;
}

const ChatPanel = ({ onClose }: ChatPanelProps) => {
  const { entries, typing, choose } = useChat();
  const lastRef = useRef<HTMLDivElement>(null);
  const lastEntry = entries[entries.length - 1];

  // Show a new bot answer from its first line; otherwise keep the bottom in view.
  useEffect(() => {
    const block = lastEntry.from === "bot" && !typing ? "start" : "end";
    lastRef.current?.scrollIntoView({ behavior: "smooth", block });
  }, [lastEntry, typing]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const jumpTo = (sectionId: string) => {
    onClose();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      role="dialog"
      aria-label="Chat with Mini Brainard"
      className="fixed inset-0 z-50 flex flex-col bg-background sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[560px] sm:max-h-[calc(100vh-8rem)] sm:w-[380px] sm:rounded-2xl sm:border sm:border-border sm:shadow-2xl animate-scale-in"
    >
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <MiniBrainard size={40} typing={typing} />
        <div className="flex-1">
          <p className="font-semibold gradient-text">Mini Brainard</p>
          <p className="text-xs opacity-70">
            {typing ? "typing…" : "Answers come from this portfolio"}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="rounded-full p-2 hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" aria-live="polite">
        {entries.map((entry) => (
          <div key={entry.id} ref={entry === lastEntry ? lastRef : undefined}>
            {entry.from === "bot" ? (
              <BotMessage
                answer={entry.answer}
                showOptions={entry === lastEntry && !typing}
                onChoose={choose}
                onJump={jumpTo}
              />
            ) : (
              <VisitorMessage text={entry.text} />
            )}
          </div>
        ))}
        {typing && (
          <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3 w-fit" aria-label="Mini Brainard is typing">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPanel;
