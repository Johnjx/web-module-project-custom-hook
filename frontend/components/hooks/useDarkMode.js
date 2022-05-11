import { useState } from "react";

export const useDarkMode = (initMode) => {
    const [darkMode, setDarkMode] = useState(initMode);

    return [darkMode, setDarkMode];
};

export default useDarkMode;