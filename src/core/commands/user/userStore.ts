import { defineStore } from "pinia";
import { LOCAL_USER } from "./userConstant";
import { getLoginUser } from "./userApi";
import type { UserType } from "./type";

/**用户系统 */
export const useUserStore = defineStore("user", {
  state: () => ({
    loginUser: {
      ...LOCAL_USER,
    }
  }),
  getters: {},
  actions: {
    async getAndSetLoginUser() {
      const res: any = await getLoginUser();
      if (res?.code === 0 && res.data) {
        this.loginUser = res.data
      } else {
        console.error("login error")
        this.$reset()
      }
    },
    setLoginUser(user: UserType) {
      this.loginUser = user
    }
  },
  // 持久化
  persist: {
    key: "user-store",
    storage: localStorage,
  },
})