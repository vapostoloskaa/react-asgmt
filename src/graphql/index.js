import { ApolloClient, InMemoryCache} from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";
export const apolloClient = new ApolloClient({
    uri: "https://api.spacexdata.com/v5/launches" ,
    cache: new InMemoryCache()
});

class SpaceService{
    async getSpaceMission(limit=10){
        try{
            const response = await apolloClient.query({
                query: GET_SPACE_MISSION,
                variables: {limit}
            });
            if(!response || !response.data) throw new Error("Cannot get rocket launches list!")
            return response.data.launchePast
        } catch(err){
            throw err;
        }
    }
}

export default new SpaceService();
