import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";

export const CustomButton = styled(MuiButton)`
  background-color: #f3c374;
  color: #212121;
  border-radius: 8px;
  border: transparent;
  border-radius: 48px;
  &:hover {
    border: transparent;
    background-color: #212121;
    color: #fff;
  }
`;
