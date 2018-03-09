import React from 'react';
import propTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import moment from 'moment';

const DATE_FORMAT = 'dddd, MMMM Do YYYY, h:mm:ss a';

const GET_USERS = gql`
  query {
    allUsers {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

const User = ({ id, name, createdAt, updatedAt }) => (
  <div>
    <h2>{name}</h2>
    <p>
      <span>created: {moment(createdAt).format(DATE_FORMAT)}</span>
      <br />
      <span>updated: {moment(updatedAt).format(DATE_FORMAT)}</span>
    </p>
  </div>
);
User.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  createdAt: propTypes.instanceOf(Date),
  updatedAt: propTypes.instanceOf(Date)
};

export { User };

const ApolloExample = () => (
  <p>
    Example using GraphQL's `apollo-boost`<br />
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          <ul>
            {data.allUsers.map(user => (
              <li>
                <User {...user} />
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  </p>
);

export default ApolloExample;
