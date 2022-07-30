import styled from "styled-components";

import Profile from "components/accounts/Profile";
import Inventory from "components/accounts/Inventory";

function ProfilePage() {
  return (
    <Container>
      <Profile />
      <Inventory />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem 0 0 0;
`;

export default ProfilePage;
