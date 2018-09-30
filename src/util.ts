export function hexWithoutHash(color: chroma.Color) {
  const hexMatch = color
  .hex()
  .match(/^#([A-Fa-f0-9]{6})/);

  if (!hexMatch) {
    throw new Error(`No match for hex of colour ${color.css()}`);
  }

  return hexMatch[1];
}

export function limitRate<T>(fn: (value: T) => void, delayMs: number) {
  let timeout: number | undefined;
  let lastRunValue: T;
  let lastPassedValue: T;

  const timeoutHandler = () => {
    timeout = undefined;
    if (lastRunValue !== lastPassedValue) {
      fn(lastPassedValue);
      lastRunValue = lastPassedValue;
    }
  };

  return (value: T) => {
    lastPassedValue = value;
    if (timeout) {
      // Clear existing timeout
      window.clearTimeout(timeout);
    } else {
      // Run the function
      // Note: using the handler function for consistency. Has no extra effects
      timeoutHandler();
    }
    // In all cases, start the timer again
    timeout = window.setTimeout(timeoutHandler, delayMs);
  };
}

export function arrayRandom<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
