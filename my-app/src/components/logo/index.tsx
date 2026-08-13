import { PATH } from "../../router/routes";
import { Button, Icon } from "../index";
import RouterLink from "../RouterLink";
import { Typography } from "../Typography";
export function Logo() {
  return (
    <div>
      <RouterLink href={PATH.HOME}>
        <Button
          icon={<Icon name="clik-pets" size="huge" />}
          color="transparent"
          text={<Typography text="ClikPets" variant="h2" size="large" />}
          border="thin"
          radius="small"
        />
      </RouterLink>
    </div>
  );
}
