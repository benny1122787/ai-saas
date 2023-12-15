建置流程:

1.使用VS Code開啟專案

2.打開 Terminal

3..env裡面加入 OPENAI_API_KEY，REPLICATE_API_TOKEN，DATABASE_URL

4.輸入 npm run dev

5.使用網頁開啟 http://localhost:3000


如果需要查看 Prisma DB

1.打開另一個 Terminal

2.輸入 npx prisma studio

3.使用網頁開啟 http://localhost:5555

如果需要使用 stripe

1. .env 加入 STRIPE_WEBHOOK_SECRET

2.打開另一個 Terminal

3.輸入stripe listen --forward-to localhost:3000/api/webhook

4.確保 STRIPE_WEBHOOK_SECRET 跟 webhook signing secret 一樣