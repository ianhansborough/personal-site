# Ian's personal site

Nothing much to say here. A quick first iteration of my personal site. Setup using Gatsby to generate static html files on build for deployment.

### Development

From the root directory, start up gatsby and render a hot-reloading local version of the site.

```sh
gatsby develop
```

### Build

Generate static /public/ directory.

```sh
gatsby build
```

### Deploy

Generate static /public/ directory using `gatsby build` and sync to specified s3 bucket using the AWS cli.

```sh
npm run deploy
```
