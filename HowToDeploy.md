A reminder for myself about how to deploy to GitHub Pages:

```shell
npm run build
git add dist -f
git commit -m "<MESSAGE HERE>"
git subtree push --prefix dist origin gh-pages
```