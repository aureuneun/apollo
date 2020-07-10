import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: (_, args, context) => {
        console.log(`args: ${args}`);
        console.log(context);
        return false;
      },
    },
    Mutation: {
      toggleLiked: (
        _,
        { id, isLiked }: { id: number; isLiked: boolean },
        { cache }
      ) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});

export default client;
