require("dotenv").config();
const { clientStart } = require("xzcgram");
const apiId = Number(process.env.API_ID);
const apiHash = process.env.API_HASH;
const botToken = process.env.BOT_TOKEN || undefined;
function question(text) {
  return new Promise((resolve) => {
    process.stdout.write(text);
    process.stdin.resume();
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      resolve(data.toString().trim());
    });
  });
}

(async () => {
  const { bot } = await clientStart({
    apiId,
    apiHash,
    botToken,
    sessionType: "store",
    sessionName: "xsession",
    loginOptions: {
      phoneNumber: async () => await question("Phone number: "),
      password: async () => await question("2FA password: "),
      phoneCode: async () => await question("Login code: "),
      onError: (err) => console.error(err),
    },
  });

  bot.command("start", async (ctx) => {
    await ctx.replyViaBot(process.env.BOT_USERNAME, "start")
  });

  bot.command("ping", async (ctx) => {
    await ctx.replyQuote("Pong!");
  });
  
  bot.inlineQuery(/start/i, async (ctx) => {
    await ctx.answerArticles([
      {
        id: "menu",
        title: "@KawakunChan",
        description: "GramJs modified by KawakunChan",
        text: "Enter menu here",
        buttons: [
          [{ text: "Channel", url: "https://t.me/RealKawakunChan" }],
        ],
      },
    ]);
  });

  await bot.launch();
  console.log("Bot is running.");
})();