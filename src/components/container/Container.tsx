import React from "react";
interface Container{
 children:React.ReactNode;
}

function Container({children}: Container){
  return(<>
  <div className="mx-auto container">
    {children}
  </div>
  </>);
}
export default Container;