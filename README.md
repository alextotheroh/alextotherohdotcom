# alextotherohdotcom

## deployment
- on personal ubuntu host, project is hosted at /HomePage but index.html is at root.
- thus, the homepage field is set in package.json

- after doing:

```
npm run build
```

copy the contents of the build directory to the /HomePage folder on ubuntu host.