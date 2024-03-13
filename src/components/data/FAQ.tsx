import { FAQCollection } from "@/types/faq-types";

export const FAQ: FAQCollection[] = [
  {
    header: `Basic Questions`,
    details: [
      {
        question: "What is Austin Glitch State?",
        answer: `A community of game developers playing whatever we're working 
    on and giving each-other feedback`,
      },
      {
        question: "Who can join Austin Glitch State?",
        answer: `Developers, students, anyone with a WIP.`,
      },
      {
        question: "Do I need to bring a game to come?",
        answer: `No, not at all. But help critique though.`,
      },
    ],
  },
  {
    header: `Submitting`,
    details: [
      {
        question: "Is my game too finished?",
        answer: `I don't know, is it finished?`,
      },
      {
        question: "How do I submit my game?",
        answer: `All you need to do is fill out the submit form 
    with basic info about your game.`,
      },
      {
        question: "How are games chosen?",
        answer: `Because of the limited time we have, only a few games are accepted.
            If your game is not chosen it'll be moved to the next meeting`,
      },
      {
        question: "How many games can I bring?",
        answer: `1 game per team.`,
      },
    ],
  },
];