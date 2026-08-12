import { Button, Icon, Typography } from "../../components";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableTheme = "light" | "dark";

export function MenuOptions() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const savedTheme = localStorage.getItem("theme") as AvailableTheme;
    return savedTheme || "light";
  });
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const IconTheme = {
    light: <Icon name="moon" size="xlarge" />,
    dark: <Icon name="sun" size="xlarge" />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className={styles.notPhoneMenu}>
        <Button
          icon={IconTheme[theme]}
          color="transparent"
          onClick={toggleTheme}
          border="thin"
          radius="small"
        />
        <>
          <Button
            icon={<Icon name="myPets" size="xlarge" />}
            color="transparent"
            border="thin"
            radius="small"
          />
          <Button
            icon={<Icon name="myAdoptions" size="xlarge" />}
            color="transparent"
            border="thin"
            radius="small"
          />
          <Button
            icon={<Icon name="profile" size="xlarge" />}
            color="transparent"
            border="thin"
            radius="small"
          />
          <Button
            icon={<Icon name="login" size="xlarge" />}
            color="transparent"
            border="thin"
            radius="small"
          />
        </>
      </div>
      <div className={styles.phoneMenu}>
        <Button
          icon={<Icon name="menu" size="xlarge" />}
          color="transparent"
          border="thin"
          radius="small"
        />
        <div className={styles.menu}>
          <div>
            {IconTheme[theme]}
            <Typography text="Tema" size="base" color="inherit" />
          </div>
          <div>
            <Icon name="myPets" size="xlarge" />
            <Typography text="Meus pets" size="base" color="inherit" />
          </div>
          <div>
            <Icon name="myAdoptions" size="xlarge" />
            <Typography text="Minhas adoções" size="base" color="inherit" />
          </div>
          <div>
            <Icon name="profile" size="xlarge" />
            <Typography text="Perfil" size="base" color="inherit" />
          </div>
          <div>
            <Icon name="login" size="xlarge" />
            <Typography text="Login" size="base" color="inherit" />
          </div>
        </div>
      </div>
    </>
  );
}
