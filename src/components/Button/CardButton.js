import React from "react";
import Button from "./Button";
import AddIcon from "@material-ui/icons/Add";

export default function CardButton({ label, onClick, ...props }) {
  return (
    <Button
      height={26}
      label={label}
      labelSize={"12px"}
      padding={"0 10px"}
      onClick={onClick}
      icon={<AddIcon style={{ fontSize: "15px"}} />}
      {...props}
    />
  );
}
