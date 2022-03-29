import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { Link } from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default memo(({ data, isConnectable }) => {
  const string = data.img.slice(0, -5);
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555', visibility: "hidden" }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Link to={`/${string}`}><img src={images[data.img]} width={104} height={76} onClick={data.onClick}/></Link>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ background: '#555', visibility: "hidden" }}
        isConnectable={isConnectable}
      />
    </>
  );
});