import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

import { Hct } from "@material/material-color-utilities";

// Simple demonstration of HCT.
// const color = Hct.fromInt(0xff4285f4);
// console.log(`Hue: ${color.hue}`);
// console.log(`Chrome: ${color.chroma}`);
// console.log(`Tone: ${color.tone}`);
const Register = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/react-lottie-player");
  });
  return (
    <div className="container">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <div className="">Hello</div>
    </div>
  );
};
Register.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
export default Register;
