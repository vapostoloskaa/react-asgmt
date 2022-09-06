import gql from "graphql-tag";
export const GET_SPACE_MISSION = gql`

    query GetSpaceMission($limit: Int!){
    launchesPast(limit: $limit) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              flight
              core {
                reuse_count
            
              }
            }
          }
          
        }
        ships {
          image
        }
      }
    }
`;
