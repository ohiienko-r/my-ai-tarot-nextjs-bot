import { Bot } from "grammy";

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋 Hi! We're back and currently cooking something. Stay tuned!"
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
              url: "https://chamois-internal-preferably.ngrok-free.app",
            },
          },
        ],
      ],
    },
  });
});

bot.command("app_sho", (ctx) => {
  ctx.reply("Dev server:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Dev",
            web_app: {
              url: "https://chamois-internal-preferably.ngrok-free.app/auth/365976134",
            },
          },
        ],
      ],
    },
  });
});
