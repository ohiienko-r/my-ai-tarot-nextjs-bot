import { Bot } from "grammy";

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋 Hi! We're back and currently cooking something. Stay tuned!",
  );
});

bot.command("app", (ctx) => {
  ctx.reply("Dev server:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Dev",
            web_app: {
              url: "https://7tt5472n-5173.euw.devtunnels.ms",
            },
          },
        ],
      ],
    },
  });
});
