"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MainCard } from "./_components/MainCard";
import { useState } from "react";
import { SecondCard } from "./_components/SecondCard";
import { ThirdCard } from "./_components/ThirdCard";
import { FinishCard } from "./_components/FinishCard";

const FormPage = () => {
  const comp = [MainCard, SecondCard, ThirdCard, FinishCard];
  const [index, setIndex] = useState(0);
  const Stepper = comp[index];
  const stepContinue = () => {
    comp.length - 1 !== index ? setIndex((prev) => prev + 1) : index;
  };

  const stepBack = () => {
    index != 0 ? setIndex((prev) => prev - 1) : index;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, translateX: 200 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -200 }}
        transition={{ duration: 0.4 }}
      >
        <Stepper
          stepContinue={stepContinue}
          stepBack={stepBack}
          comp={comp}
          index={index}
          setIndex={setIndex}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FormPage;
