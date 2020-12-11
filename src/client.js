import * as contentful from "contentful";

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

console.log(process.env.REACT_APP_SPACE_ID)
console.log("test");

export default client


/* import * as contentful from 'contentful'

const client = contentful.createClient({
    space:'qnr5iz3m7m7r',
    accessToken:'IZrrBmmyCMgAgMz65eRMT0rt4THIGvQw_BtZjLljFc0' 
})

export default client */