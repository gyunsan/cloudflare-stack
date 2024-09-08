import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faqs',
  description: 'Frequently asked questions.',
};

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default async function Faqs() {
  return (
    <div>
      {/* FAQ */}
      <section
        className="mx-auto max-w-md divide-y-2 divide-slate-200 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 lg:py-32 dark:bg-zinc-900 rounded-lg py-12"
        aria-labelledby="faq-heading"
      >
        <h2 className="text-3xl font-bold tracking-tight " id="faq-heading">
          Frequently asked questions
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-slate-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
