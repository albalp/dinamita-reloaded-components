import * as React from "react";
import Button from "@mui/material/Button";
import AOS from "aos";

export default function SaveButton() {
  return (
    <div>
      <Button variant="contained" data-aos="zoom-in">
        Save
      </Button>
    </div>
  );
}

AOS.init();
