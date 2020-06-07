import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  height: 40px;
  padding: 0 50px;
  background-color: #dd7596;
  border: 1px solid #ffbfd3;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 300;

  &:focus {
    outline: unset;
  }

  &:disabled {
    background: #3e486805 0% 0% no-repeat padding-box;
  }
`;
