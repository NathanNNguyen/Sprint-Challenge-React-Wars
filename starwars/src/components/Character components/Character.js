import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.div`
  margin: 2rem;
  padding: 1%;
  width: 40%;
`;

const Character = ({ mass, height, name, gender, birthYear, skinColor, hairColor }) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Button>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{name}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Gender: {gender}</DropdownItem>
          <DropdownItem>Hair color: {hairColor}</DropdownItem>
          <DropdownItem>Skin color: {skinColor}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Birth year: {birthYear}</DropdownItem>
          <DropdownItem>Height: {height}</DropdownItem>
          <DropdownItem>Mass: {mass}</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </Button>
  );
}

export default Character;


// const Character = ({ name, gender, birthYear, skinColor }) => {
//   const [fadeIn, setFadeIn] = useState(true);

//   const toggle = () => setFadeIn(!fadeIn);

//   return (
//     <div>
//       <Button color="primary" onClick={toggle}>Character</Button>
//       <Fade in={fadeIn} tag="h5" className="mt-3">
//         <h2>{name}</h2>
//         <div>Gender: {gender}</div>
//         <p>Birth Year: {birthYear}</p>
//         <p>Skin Color: {skinColor}</p>
//       </Fade>
//     </div>
//   );
// }

// export default Character;

// const Character = ({ name, gender, birthYear, skinColor }) => {
//   return (
//     <Card>
//       <CardTitle>{name}</CardTitle>
//       <CardSubtitle>Gender: {gender}</CardSubtitle>
//       <CardText>Birth Year: {birthYear}</CardText>
//       <CardText>Skin Color: {skinColor}</CardText>
//     </Card>
//   );
// };

// const Card = (props) => {
//   return (
//     <div className='name' key={model}>
//       <h2>{props.name}</h2>
//       <p>{props.model}</p>
//     </div>
//   );
// };