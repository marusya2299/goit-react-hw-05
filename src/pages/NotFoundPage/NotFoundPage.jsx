import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import css from '../../pages/NotFoundPage/NotFoundPage.module.css';

export default function NotFound () {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [navigate]);

  return <p className={css.text}>Page not found. Redirecting in <span className={css.accent}>{seconds}</span> seconds...</p>;
}
