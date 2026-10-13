import { ExternalLink, ArrowDown } from "lucide-react";
import { ChatAction, ChatAnswer, ChatOption } from "@/lib/chat/types";

interface BotMessageProps {
  answer: ChatAnswer;
  showOptions: boolean;
  onChoose: (option: ChatOption) => void;
  onJump: (sectionId: string) => void;
}

const actionClass =
  "inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1 text-xs font-medium hover:bg-primary/15 transition-colors";

const ActionButton = ({
  action,
  onJump,
}: {
  action: ChatAction;
  onJump: (sectionId: string) => void;
}) => {
  if (action.kind === "section") {
    return (
      <button type="button" className={actionClass} onClick={() => onJump(action.sectionId)}>
        {action.label}
        <ArrowDown className="w-3 h-3" />
      </button>
    );
  }

  const external = action.href.startsWith("http");
  return (
    <a
      href={action.href}
      className={actionClass}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {action.label}
      {external && <ExternalLink className="w-3 h-3" />}
    </a>
  );
};

export const BotMessage = ({ answer, showOptions, onChoose, onJump }: BotMessageProps) => (
  <div className="flex flex-col items-start gap-2">
    <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm leading-relaxed space-y-2">
      {answer.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>

    {answer.actions.length > 0 && (
      <div className="flex flex-wrap gap-2 max-w-[90%]">
        {answer.actions.map((action) => (
          <ActionButton key={action.label} action={action} onJump={onJump} />
        ))}
      </div>
    )}

    {showOptions && (
      <div className="flex flex-col items-end gap-2 self-stretch">
        {answer.options.map((option) => (
          <button
            key={option.nodeId}
            type="button"
            onClick={() => onChoose(option)}
            className="rounded-2xl border border-border px-4 py-2 text-sm text-right hover:border-primary hover:text-primary transition-colors"
          >
            {option.label}
          </button>
        ))}
      </div>
    )}
  </div>
);

export const VisitorMessage = ({ text }: { text: string }) => (
  <div className="flex justify-end">
    <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm text-primary-foreground">
      {text}
    </p>
  </div>
);
