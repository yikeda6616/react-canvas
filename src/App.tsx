import React, { useEffect, useState } from "react";

function App() {
  const [png, setPng] = useState<string | null>(null);
  const width = 255;
  const height = 255;

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas && canvas.getContext("2d");
    if (!canvas || !ctx) return;

    // canvas描画処理
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#bada55";
    ctx.fillRect(0, 0, width, height);

    setPng(canvas.toDataURL());
  }, []);

  return (
    <div>
      <h1>React.js と CanvasでPNG生成</h1>
      <h2>Canvasを頑張って描く場合</h2>
      {png && (
        <div className="comp" style={{ display: "flex" }}>
          <img alt="icon" src={png} />
        </div>
      )}
    </div>
  );
}

export default App;
