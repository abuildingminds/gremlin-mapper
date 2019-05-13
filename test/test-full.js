const mapper = require('../src/gremlin-mapper');


const host = "devbmclgraphdb.gremlin.cosmosdb.azure.com";
const user = "/dbs/dev-bmcl-db-buildingstructure/colls/ante-test";
const password =  "w4kWolX91GNRPV6rkU0exoviJQMT4HZOQDft3BCq4CZMUEs9p7VXWAna2xS0sXAfoSBJkdbMMEpq6tCI94QaKg==";
const port = "443";

const g = new mapper(['azure', 'devbmclgraphdb'], port, host, {ssl: true, user, password});

// let query = "g.V()";

// g.queryRaw(query, (error, result) => {
//     if (error) console.error(error);
//     else console.log(result);
// });

const Person = g.define('person', {
    id: {
        type: g.STRING,
        required: true
    },
    label: {
        type: g.STRING,
        required: true
    },
    name: {
      type: g.STRING,
      required: true
    },
    age: {
      type: g.NUMBER
    }
});

// Person.create(        {
//     "id": "1",
//     "label": "person",
//     "name": "Diego",
//     "age": 29
//   }, (error, result) => {
//     if (error) {
//       console.log(error);
//     }
//     else {
//         console.error(result);
//     }
// });

// Person.find({'name': 'Jan'}, (error, result) => {
//     if (result) result.delete((error, result) => {
//         console.log(result);
//     });
// });
Person.findAll({'name': ['Diego', 'Ante']}, async (error, result) => {
    if (result) {
        console.log(result[1]);
    };
});