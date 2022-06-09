import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Ap from "./Ap";


export default function Home(){
  return(
    <StrictMode>
    <ChakraProvider>
      <Ap />
    </ChakraProvider>
  </StrictMode>
  );
} 


