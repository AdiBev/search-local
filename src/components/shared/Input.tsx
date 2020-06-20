import styled from "styled-components";
import {
  inputFocusBorder,
  inputBorder,
  colorPrimary,
} from "../themes/BaseStyles";
import { motion } from "framer-motion";

export const Input = styled(motion.input)`
  height: 40px;
  border-radius: 4px;
  font-size: 16px;
  color: ${colorPrimary};
  padding-left: 1rem;
  border: 1px solid ${inputBorder};

  &:focus {
    border: 1px solid ${inputFocusBorder};
  }

  &:disabled {
    background: #3e486805 0% 0% no-repeat padding-box;
    border: 1px solid #3e486826;
  }
`;
