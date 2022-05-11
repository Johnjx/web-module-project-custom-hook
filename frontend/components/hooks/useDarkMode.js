import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (initMode) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initMode);

    return [darkMode, setDarkMode];
};

export default useDarkMode;