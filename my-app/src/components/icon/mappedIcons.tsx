import { MoonIcon, SunIcon, LoginIcon, GetAPetLogo } from "./icons";

interface Icon {
  name: string;
  svg: React.ReactNode;
}
export const mappedIcons: Icon[] = [
  {
    name: "moon",
    svg: <MoonIcon />,
  },
  {
    name: "sun",
    svg: <SunIcon />,
  },
  {
    name: "login",
    svg: <LoginIcon />,
  },
  {
    name: "get-a-pet",
    svg: <GetAPetLogo />,
  },
];
