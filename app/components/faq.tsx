'use client'
import { useState } from 'react'

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "What challenges does MailPilot address in email management?",
            answer: "."
        },
        {
            id: 2,
            question: "How does MailPilot improve operational efficiency?",
            answer: ""
        },
        {
            id: 3,
            question: "What are the core features of MailPilot’s Intelligent Email Monitoring?",
            answer: "."
        },
        {
            id: 4,
            question: "How does the Contextual AI Response Engine work?",
            answer: ""
        },
        {
            id: 5,
            question: "What analytics capabilities does MailPilot provide?",
            answer: "."
        },
        {
            id: 6,
            question: "What measurable benefits can organizations expect from MailPilot?",
            answer: ""
        }
    ];

    const toggleFAQ = (id: number) => {
        setOpenFAQ(prevId => prevId === id ? null : id);
    };

    return (
        <section id='faq' className="w-full bg-[#07050D] py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-[#FFFFFFcc] font-space sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`relative bg-[#181522CC] rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[80px] ${
                openFAQ === faq.id ? 'mb-32 lg:mb-0' : 'mb-0'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-4 text-left rounded-lg sm:p-6"
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="pr-4 text-sm font-medium text-white font-space sm:text-base">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    <svg
                      className={`w-5 h-5 text-white transform transition-transform duration-200 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer - Positioned absolutely to prevent layout shift */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`absolute left-0 right-0 z-10 bg-white rounded-b-lg shadow-md border-t border-gray-100 transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                style={{
                  top: 'calc(100% - 1px)',
                }}
                aria-hidden={openFAQ !== faq.id}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-sm leading-relaxed text-white font-space sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default FAQ