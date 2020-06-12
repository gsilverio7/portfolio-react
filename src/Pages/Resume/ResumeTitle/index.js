import * as React from "react";
import { useDencrypt } from "use-dencrypt-effect";

import "./styles.css";

export default function ResumeTitle() {

  const values = ["Resume", "Resumo"];
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {

    let i = 0;

    const action = setInterval(() => {
      
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 1000);

    return () => clearInterval(action);
  }, [values, dencrypt]);

  
  return <h1 className="resume-title">{result}</h1>;

}