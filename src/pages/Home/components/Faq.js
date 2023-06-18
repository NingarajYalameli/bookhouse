import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use BookHouse?",
      answer:
        "Because, It is one of the best online app for best seller eBooks"
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Yes, you can access it on mobile"
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "Yes, Go and enjoy the offers",
    },
    {
      id: 4,
      question: "Do you support International payments?",
      answer:
        "No, We are working on it",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq}/>
        ))}
      </div>
    </section>
  );
};
