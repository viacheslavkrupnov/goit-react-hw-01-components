import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
export default function App() {
  return (
    <Container>
      {/* Task-1 */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
}
