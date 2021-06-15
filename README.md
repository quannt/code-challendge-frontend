# Code challenge: Frontend

Demo: https://code-challendge-frontend.vercel.app/
## Stack

- Next.JS
- TypeScript
- TailwindCSS

## Getting started

```
yarn install
```

## Running locally

```
yarn dev
```

Once started, the app should be available via [localhost:3000](http://localhost:3000)


## Questions
1. What are some edge-cases you'd consider before shipping this feature?
- The number of tips can be quite large and can't be reasonably displayed on one single page. We could look into lazy loading “under the fold” tips, adding pagination, or even a search box. Using virtualized list would also help with the performance.
- The page could have content in different languages, the font that we are using may not be able to display the content properly.
2. Which of your skills that you expect to use in this role do you feel weren't highlighted in this project?
- Off the top of my head: debugging, performance tuning, the ability to dive deep into an unfamiliar code base and get information out of it.
3. What's important for remote engineering teams to work well?
- Asynchronous communication, well written documents, competent team members, and empathy with each others. 
4. My thoughts whether opening one item should close the other or not.
- Honestly, I don't have a strong opinion on this. From my personal experience, seems like opening one should close on the other is the standard approach. However, I think that keeping everything open is not that bad too, especially when tips are related and users want to read more than one at the same time (for references I guess).
