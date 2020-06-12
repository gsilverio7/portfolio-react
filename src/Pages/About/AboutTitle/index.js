import * as React from "react";
import { useDencrypt } from "use-dencrypt-effect";

import "./styles.css";

export default function AboutTitle() {

  const values = ["About Me", "Sobre Mim"];
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {

    let i = 0;

    const action = setInterval(() => {
      
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 1000);

    return () => clearInterval(action);
  }, [values, dencrypt]);

  
  return <h1 className="about-title">{result}</h1>;

}