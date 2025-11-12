import React from "react";

function DynamicAttributes() {
  const name = "peter";
  const path =
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

  return (
    <div>
      <input type="text" value={name} id={name} />
      <br />
      <img src={path} alt="dog" />
    </div>
  );
}

export default DynamicAttributes;
