# My 404 page

# TODO

-   init.rs を完成させる
-   404 ページのデザインを考える
-   config.json を読み込んでいい感じにする

## Setup

1. run `npm install`
2. create a `config.json` file with the following content:

```json
{
    "port": 3000,
    "host": "localhost",
    "url": "http://localhost:3000"
}
```

or run a `npm run config` command to create a config file with rust script.

if your system is windows, you can run `npm run config:win` command to create a config file with rust script.

3. run `npm run build`
4. setup nginx or apache to serve the `public` folder
   example nginx config:

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/404/public;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
