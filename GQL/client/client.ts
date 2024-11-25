import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { getMainDefinition } from "@apollo/client/utilities"
import { LOCAL_JWT, PREFIX_STATIC } from "@/constants/constants"
import { WebSocketLink } from "@apollo/client/link/ws"
import AsyncStorage from "@react-native-async-storage/async-storage"

const wsLink = new WebSocketLink({
  uri: `${PREFIX_STATIC}graphql`,
  options: {
    reconnect: true,
  },
})

const httpLink = createHttpLink({
  uri: `${PREFIX_STATIC}graphql`,
})

const authLink = setContext((_, { headers }) => {
  const token = AsyncStorage.getItem(LOCAL_JWT)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const wrapperHttpLink = authLink.concat(httpLink)

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  wrapperHttpLink
)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    resultCaching: true,
  }),
})
