import { gql } from "@apollo/client";


export const homeQuery = gql`
    query HomeQuery {
    movies {
        id
        title
        image{
            name
            url
        }
        year
        description
        type
        genre
    }
}
`
