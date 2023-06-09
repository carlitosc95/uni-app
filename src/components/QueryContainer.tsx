import { Children, useState } from "react";

function QueryContainer({children}): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <div className="join m-2">
          {children}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default QueryContainer;
