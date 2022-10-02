import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({item}) {
  //chips para ver recibe como props el item a renderizar
   return (
    <Stack direction="row" spacing={1}>
      <Chip  color="success" variant="filled" label={item}/>
    </Stack>
  );
}
