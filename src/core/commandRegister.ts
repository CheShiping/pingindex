/**命令注册器 */
import type { CommandType } from "./command";
import userCommands from "./commands/user/userCommands.ts";

/**
 * 命令列表（数组元素顺序会影响 help 命令的展示顺序）
 */
const commandList: CommandType[] = [
  ...userCommands,
];

/**
 * 命令字典
 */
const commandMap: Record<string, CommandType> = {};

commandList.forEach((command) => {
  commandMap[command.func] = command;
  command.alias?.forEach((name) => {
    commandMap[name] = command;
  });
});

export { commandList, commandMap };
