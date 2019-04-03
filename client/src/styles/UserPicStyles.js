import styled from 'styled-components';

export const DefaultProfilePic = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  margin: auto;
  border-radius: 50%;
  background: ${props => props.bgcolor};
`;

export const ProfilePicTitle = styled.p`
  text-align: center;
  font-weight: bold;
  color: #fff;
  line-height: 12.5rem;
  font-size: 5rem;
  font-family: 'Oxygen', sans-serif;
  text-transform: capitalize;
`;
