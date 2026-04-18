"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="group border-b border-gray-200 last:border-0 transition-colors hover:bg-gray-50">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-8 text-base font-semibold text-gray-900">
          {faq.pregunta}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-brand-100" : "group-hover:bg-brand-100"
          }`}
        >
          <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pr-8 text-sm leading-relaxed text-gray-600 md:px-8 animate-in fade-in zoom-in-95 duration-200">
          {faq.respuesta}
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  return (
    <div className="overflow-hidden divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
        />
      ))}
    </div>
  );
}
