"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MainCard } from "./_components/MainCard";
import { useState, useEffect } from "react";
import { SecondCard } from "./_components/SecondCard";
import { ThirdCard } from "./_components/ThirdCard";
import { FinishCard } from "./_components/FinishCard";

const FormPage = () => {
  const comp = [MainCard, SecondCard, ThirdCard, FinishCard];
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    date: "",
    image: "",
  });

  const [errorText, setErrorText] = useState({});
  const [clicked, setClicked] = useState({});

  const handleFocus = (e) => {
    const { name } = e.target;

    setClicked((prev) => ({ ...prev, [name]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    setErrorText((prev) => ({ ...prev, [name]: "" }));
  };

  const Stepper = comp[index];

  const stepBack = () => {
    index != 0 ? setIndex((prev) => prev - 1) : index;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -200 }}
          transition={{ duration: 0.4 }}
        >
          <Stepper
            // stepContinue={stepContinue}
            stepBack={stepBack}
            comp={comp}
            index={index}
            setIndex={setIndex}
            value={value}
            handleChange={handleChange}
            errorText={errorText}
            setErrorText={setErrorText}
            onFocusIn={handleFocus}
            clicked={clicked}
            setClicked={setClicked}
          />
        </motion.div>
      </AnimatePresence>
    </form>
  );
};

export default FormPage;
