import Layout from '../../components/Layout';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  return (
    <Layout pageTitle="Users">
      <h1>Users Page</h1>
      {dataUsers.map((user) => (
        <>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <hr />
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
