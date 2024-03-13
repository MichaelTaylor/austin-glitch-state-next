interface FAQDetail {
  question: string;
  answer: string;
}

export interface FAQCollection {
  header: string;
  details: FAQDetail[];
}