"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex w-full items-center justify-between py-5 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-base font-medium text-gray-900">{item.question}</span>
            <span className="ml-4 text-gray-400 text-xl leading-none">
              {openIndex === index ? "\u2212" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
