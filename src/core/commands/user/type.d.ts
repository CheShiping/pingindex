// 这种分散式的类型定义方式让我们的代码更加模块化‍，便于维护和扩展。
/**用户类型 */
interface UserType {
  username: string;
  email?: string;
  createTime?: Date;
  updateTime?: Date;
}

export type { UserType };
