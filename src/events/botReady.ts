import chalk from "chalk";
import { createEvent } from "seyfert";
import { ActivityType, PresenceUpdateStatus } from "seyfert/lib/common";

export default createEvent({
  data: { once: true, name: "botReady" },
  async run(user, client, shard) {
    void client.gateway.setPresence({
      activities: [{ name: 'Hello world!', type: ActivityType.Custom, state: "Hello world!" }],
      since: Date.now(),
      status: PresenceUpdateStatus.DoNotDisturb,
      afk: false
    })
    console.log(chalk.hex("#4070F4").bold(`${user.username} is ready`));
  
    client.logger.info(`${user.username} is ready on shard #${shard}`);
  }
})