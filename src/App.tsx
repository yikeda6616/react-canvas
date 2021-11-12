import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import styled from "styled-components";

const StyledTargetComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5957c4;
  color: #fff;
  border-radius: 50% 20% / 10% 40%;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  p {
    text-align: center;
  }
`;

const TargetComponent: React.FC = () => (
  <StyledTargetComponent id="canvas">
    <p>※画像はイメージです</p>
  </StyledTargetComponent>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.image {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

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
    <Wrapper>
      <h1>React.js html2canvasで画像生成</h1>
      <TargetComponent />
      <p>↑React Component</p>
      <p>↓PNG画像</p>
      {png && (
        <div className="image">
          <img alt="canvas" src={png} />
        </div>
      )}
      <ExportButton />
    </Wrapper>
  );
}

const saveAsImage = (uri: string) => {
  const downloadLink = document.createElement("a");

  if (typeof downloadLink.download === "string") {
    downloadLink.href = uri;
    downloadLink.download = "component.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } else {
    window.open(uri);
  }
};

const onClickExport = () => {
  const target = document.getElementById("canvas");
  target &&
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    });
};

const StyledButton = styled.button`
  background-color: #16214d;
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const ExportButton = () => (
  <StyledButton onClick={() => onClickExport()}>PNGダウンロード</StyledButton>
);

export default App;
