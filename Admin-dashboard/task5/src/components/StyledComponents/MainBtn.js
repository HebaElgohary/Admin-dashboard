import styled from 'styled-components';


/* From Uiverse.io by joe-watson-sbf */ 


const MainBtn=styled.button`

 
  font-size: 17px;
  background: #ffc506;
  border: none;
  padding: 1em 1.5em;
  color:rgb(11, 11, 11);
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.5s ease;
  cursor: pointer;


&::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffc506;
  transition: 0.5s ease;
}

&:hover {
  color:rgb(255, 255, 255);
  transition-delay: 0.5s;
}

&:hover::before {
  width: 100%;
}

&::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #ffc506;
  transition: 0.4s ease;
  z-index: -1;
}

&:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}
`
export {MainBtn}