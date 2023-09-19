import React, { useEffect, useState } from "react";

const useQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log(data);
        setLoading(false);
      });
  });

  return [questions, loading];
};

export default useQuestion;
