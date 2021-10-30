import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const TargetComponent: React.FC = () => (
  <div id="canvas">画像になるコンポーネント</div>
);

function App() {
  const [png, setPng] = useState<string | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas &&
      html2canvas(canvas).then((canvas) => {
        setPng(canvas.toDataURL());
      });
  }, []);

  return (
    <>
      <h1>React.js html2canvasで画像生成</h1>
      <TargetComponent />
      {png && <img alt="canvas" src={png} />}
    </>
  );
}

export default App;
