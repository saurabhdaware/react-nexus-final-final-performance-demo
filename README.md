# React Nexus Performance Demos

Talk Recording: https://www.youtube.com/live/StJmcYfe0mQ?si=dX0m6WEXgUfzsKz1&t=26402


### [1. Static Site Demo](./static-site-demo/)


A static-website example with network waterfall issues due to CSR, image, and fonts -
1. Turning flag in `magicFlags.ts` to true
2. Removing loading="lazy" from hero image in `App.tsx`
3. Removing the preconnect and preload from comments in `index.abell`


### [2. Interaction Issue Demo](./interaction-issue-demo/)

Record performance tab after hovering the Payments tab in navbar and see your main thread get blocked




### [3. RSC Demo](./rsc-nexus-demo/)

Copy a static string from webpage and search for it in "Sources" panel of devtools

- With "use client" in Page.tsx, you'll see the text exists in index.html as well as javascript files
- Without "use client" in Page.tsx, you'll only see text existing in index.html




