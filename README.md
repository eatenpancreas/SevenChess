# Panc's template Svelte project!

This project includes:
* Sveltekit
* Typescript
* ESLint
* Tailwind
* SurrealDB

And for deployment
* Linode
* Nginx
* Certbot
* PM2


This guide will help you through the steps of building and deploying a sveltekit+pocketbase app.
It is broken down into 4 chapters. It requires you to have a decent commandline knowledge, and experience
in node, sveltekit.

**IMPORTANT : This entire project will cost just $5 per month, _excluding domain._
This cost will increase as soon as your Linode subscription is reached.**

---
---

## Chapter 1: Initialise
This chapter requires you to have installed node and npm

After installing surrealDB, start it with this command: 
```bash
 surreal.exe start --user root --pass root file:YOUR_PROJECT_PATH\surreal_storage
```
This will instantiate a server at your local machine. You can access it by following the link.

Navigate back out of `/pb` and into `/web`.
In a diffirent terminal than pocketbase, open up node. The link node gives as a response
should direct to a working demo application.
```bash
npm i

&&

npm run dev
```

---
---


## Chapter 2: Develop
TODO
...


---
---

## Chapter 3: Server Setup & First Deploy
**IMPORTANT: Make sure to change all mentions of `SITENAME` to your domain name.
Having a (sub)domain is required for this chapter.**

**IMPORTANT: Whenever i speak of the file `#/`, it is the server folder 1 step outside of `/root`. 
This is where a lot of installations are located.**

Run this in your `/web` folder. This will create a build directory that holds the website data.

```bash
npm i -D @sveltejs/adapter-node
npm run build
```

Also copy the `/pb/pocketbase` folder. Change the pocketbase.exe to the linux version.
These two folders we'll be using to start our server.
You get the linux version from here: 
```bash
TODO
```

### To create a production version of your app on a server:

Make sure you have node and npm installed.
This is done like so:
```bash
TODO
```

Create the `/web` and `/pb` folders in `/root` folder.
This is done like so:

```bash
TODO
```

Navigate to `/web` like so:
```bash
TODO
```

In this folder, insert the 'build' file we made.
Navigate back to `/pb`, using `cd ..` and then to pocketbase. This is where we insert the pocketbase folder.

### You are now done setting up the files, let's execute our programs locally.

Navigate to `/usr/lib/systemd/system` and create a new file. Insert the following:
```bash
[Unit]

Description 	= pocketbase

[Service]
Type			= simple
User			= root
Group			= root
LimitNOFILE 	        = 4096
Restart			= always
RestartSec  	        = 5s
StandardOutput	        = append:/root/pb/errors.log
StandardError           = append:/root/pb/errors.log
ExecStart		= /root/pb/pocketbase serve --http="localhost:8000"

[Install]
WantedBy		= multi-user.target
```

Then, execute this command: 
```bash
TODO
```

After this, we also do a similar thing for node:
Install pm2 like this:
```bash
TODO
```

Then, execute this command: 
```bash
TODO
```

### You are now done executing the programs, but we still want to make it accessible to the public. This is done with nginx.

Install pm2 like this:
```bash
TODO
```

Then, navigate to `#/etc/...`: 
```bash
TODO
```

---
---

## Chapter 4: Redeployment
TODO
...


### Powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

