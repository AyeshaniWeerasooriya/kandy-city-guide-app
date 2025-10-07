import { useWindowDimensions } from "react-native";

const BASE_WIDTH = 375;

export const useScale = () => {
  const { width } = useWindowDimensions();

  const scale = (size: number) => {
    if (width >= 768) return size * 1.5;
    return (width / BASE_WIDTH) * size;
  };

  return { scale };
};
