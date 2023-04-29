curl -X POST localhost:4000/graphql -H 'Content-Type: application/json' -d '{"query": "query ExampleQuery {\nbooks {\ntitle\n}\n}"}'
