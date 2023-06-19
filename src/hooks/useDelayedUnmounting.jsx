import { useEffect, useState } from "react";

function useDelayedUnmounting(time = 300) {
  const [state, setState] = useState("unmounted");
  const show = () => {
    if (state === "unmounting") {
      return;
    }
    setState("mounting");
  };
  const hide = () => {
    if (state === "mounting") {
      return;
    }
    setState("unmounting");
  };

  useEffect(() => {
    let timeoutId;
    if (state === "unmounting") {
      timeoutId = setTimeout(() => {
        setState("unmounted");
      }, time);
    } else if (state === "mounting") {
      timeoutId = setTimeout(() => {
        setState("mounted");
      }, time);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state, time]);

  return [state, show, hide];
}

export default useDelayedUnmounting;
