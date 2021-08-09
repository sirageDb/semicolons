import React from "react";

type alertArgument = {
    alertText : string,
    isVisible : boolean 
};

export default function AlertBox({ alertText, isVisible } : alertArgument): JSX.Element {
  return (
    <div>
      <div>{alertText}</div>
      <div>
        <button>Ok</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
