import React, { useEffect, useState } from "react";

function App() {
  const [png, setPng] = useState<string | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 250;
    canvas.height = 250;
    const ctx = canvas && canvas.getContext("2d");
    if (!canvas || !ctx) return;

    // canvas描画処理
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#bada55";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setPng(canvas.toDataURL());
  }, []);

  return (
    <>
      <h1>React.js と CanvasでPNG生成</h1>
      <h2>Canvasを頑張って描く場合</h2>
      {png && <img alt="icon" src={png} />}
    </>
  );
}

export default App;
