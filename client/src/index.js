import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

const graphqlEndpoint =
  'https://api.graph.cool/simple/v1/cjehlau7e177o011135boojp8';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: graphqlEndpoint //'https://nx9zvp49q7.lp.gql.zone/graphql'
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
