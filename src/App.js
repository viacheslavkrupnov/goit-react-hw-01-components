import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Statistics/Section/Section";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/Transactions/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

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

      {/* Task- 2*/}
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      {/* Task- 3*/}
      <FriendList friends={friends} />

      {/* Task- 4*/}
      <TransactionHistory items={transactions} />
    </Container>
  );
}
