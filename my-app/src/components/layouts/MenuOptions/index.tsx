import { Button } from "../../Button";
import styles from "./styles.module.css";
import { Icon } from "../../Icon/Icon";
import { useEffect, useState } from "react";
import type { AvailableTheme } from "../../../types/availableTheme";
export function MenuOptions() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const savedTheme = localStorage.getItem("theme") as AvailableTheme;
    return savedTheme || "light";
  });
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const IconTheme = {
    light: <Icon name="moon" size="xlarge" color="secondary" />,
    dark: <Icon name="sun" size="xlarge" color="secondary" />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.menu}>
      <Button
        icon={IconTheme[theme]}
        color="transparent"
        onClick={toggleTheme}
        border="none"
        radius="small"
      />
      {screenWidth !== null && screenWidth >= 768 ? (
        <>
          <Button
            icon={<Icon name="myPets" size="xlarge" color="secondary" />}
            color="transparent"
            border="none"
            radius="small"
          />
          <Button
            icon={<Icon name="myAdoptions" size="xlarge" color="secondary" />}
            color="transparent"
            border="none"
            radius="small"
          />
          <Button
            icon={<Icon name="profile" size="xlarge" color="secondary" />}
            color="transparent"
            border="none"
            radius="small"
          />
          <Button
            icon={<Icon name="login" size="xlarge" color="secondary" />}
            color="transparent"
            border="none"
            radius="small"
          />
        </>
      ) : (
        <Button
          icon={<Icon name="menu" size="xlarge" color="secondary" />}
          color="transparent"
          border="none"
          radius="small"
        />
      )}
    </div>
  );
}
