import { defineStore } from "pinia";

export const useTerminalConfigStore = defineStore("terminalConfig", {
  state: () => ({
    // 背景
    background: "black",
    // 输入提示
    showHint: true,
    // 终端欢迎你
    welcomeTexts: [] as string[]
  }),
  getters: {},
  actions: {
    setBackground(url: string) {
      if (!url) {
        return
      }
      this.background = url
    },
    setOrToggleShowHint(hint?: string): boolean {
      // 反转提示
      if (!hint) {
        this.showHint = !this.showHint
        return this.showHint
      }
      // 设置提示
      if (hint === "on") {
        this.showHint = true
      } else if (hint === "off") {
        this.showHint = false
      }
      return this.showHint
    },
    /**修改专断提示语 */
    setWelcomeTexts(welcomeTexts: string[]) {
      this.welcomeTexts = welcomeTexts
    },
    reset() {
      this.$reset()
    }
  },
  persist: {
    key: "terminal-config-store",
    storage: localStorage,
  }
})