import { Button, Icon } from "../index";
import { Typography } from "../Typography";
export function Logo() {
  return (
    <div>
        <Button
          icon={<Icon name="clik-pets" size="huge" />}
          color="transparent"
          text={<Typography text="ClikPets" variant="h2" size="large" />}
          border="thin"
          radius="small"
        />
    </div>
  );
}
