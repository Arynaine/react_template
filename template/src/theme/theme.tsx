import Colors from "./colors";

interface ITheme {
  colors: { [key in keyof typeof Colors]: string };
}

export const theme: ITheme = {
  colors: Colors
};
