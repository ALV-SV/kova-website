"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Which product is best for ankle sprains?",
  "What's the difference between KOVA GUARD and KOVA ANCHOR?",
  "Does KOVA REST work without the app?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const handleSend = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const userMessage: Message = { role: "user", content };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setStreamingContent("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages }),
          signal: controller.signal,
        });

        if (!response.ok) {
          let msg = "The AI assistant encountered an error. Please try again.";
          try {
            const err = await response.json();
            if (err.error) msg = err.error;
          } catch {}
          throw new Error(msg);
        }

        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let botMessage = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data: ")) continue;
            const data = trimmed.slice(6);
            if (data === "[DONE]") break;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                botMessage += delta;
                flushSync(() => setStreamingContent(botMessage));
              }
            } catch {
              // skip malformed
            }
          }
        }

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: botMessage },
        ]);
        setStreamingContent("");
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        const msg =
          e instanceof Error
            ? e.message
            : "I'm having trouble connecting right now. Please try again in a moment.";
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: msg },
        ]);
      } finally {
        setIsLoading(false);
        setStreamingContent("");
        if (abortRef.current === controller) {
          abortRef.current = null;
        }
      }
    },
    [messages, isLoading]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {shouldRender && (
        <div
          className={`fixed z-50 flex flex-col rounded-box overflow-hidden shadow-2xl bg-slate transition-all duration-250 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[520px] max-sm:bottom-20 max-sm:left-3 max-sm:right-3 max-sm:w-auto max-sm:h-[70dvh] max-sm:max-h-[calc(100dvh-6rem)]`}
        >
          <div className="bg-slate px-4 py-3 flex items-center justify-between shrink-0">
            <div>
              <h2 className="font-serif text-stone text-base">
                KOVA Advisor
              </h2>
              <p className="text-stone/60 text-xs">
                Ask about any product
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-xs btn-square text-stone/60 hover:text-stone"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-obsidian space-y-3">
            {messages.length === 0 && !isLoading && (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-stone/60 text-sm text-center mb-2">
                  Ask me anything about KOVA products
                </p>
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="btn btn-outline btn-sm justify-start bg-slate border-vitality text-stone hover:bg-vitality hover:text-stone hover:border-vitality"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-box text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-vitality text-stone"
                      : "bg-slate text-stone"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && streamingContent === "" && (
              <div className="flex justify-start">
                <div className="bg-slate rounded-box px-4 py-3">
                  <span className="loading loading-dots loading-md text-vitality" />
                </div>
              </div>
            )}

            {streamingContent !== "" && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-3 py-2 rounded-box bg-slate text-stone text-sm whitespace-pre-wrap">
                  {streamingContent}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 bg-slate px-3 py-3 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about KOVA products..."
              className="input input-bordered flex-1 text-sm bg-slate text-stone placeholder:text-stone/40"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend(input)}
              disabled={isLoading || !input.trim()}
              className="btn bg-vitality text-stone hover:bg-vitality/90 border-none disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 btn w-14 h-14 min-h-14 rounded-full bg-vitality text-stone hover:bg-vitality/90 border-none shadow-lg sm:bottom-6 sm:right-6 max-sm:bottom-4 max-sm:right-4"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
