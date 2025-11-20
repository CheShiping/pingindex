<template>
  <div class="yu-terminal">
    <div ref="terminalRef" class="terminal-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import type { YuTerminal } from './type'

const terminalRef = ref<HTMLElement | null>(null)
let terminal: Terminal | null = null
let fitAddon: FitAddon | null = null

// 终端接口实现
const terminalInstance: YuTerminal.TerminalType = {
  clear() {
    terminal?.clear()
  },
  
  writeOutput(output) {
    // 根据输出类型处理不同的输出
    switch (output.type) {
      case 'text':
        terminal?.writeln(output.text || '')
        break
      case 'command':
        terminal?.writeln(`$ ${output.text}`)
        break
      // 其他类型可以在后续实现
    }
  },
  
  writeTextOutput(text, status) {
    terminal?.writeln(text)
  },
  
  writeTextResult(text, status) {
    terminal?.writeln(text)
  },
  
  writeTextErrorResult(text) {
    terminal?.writeln(`\x1b[31m${text}\x1b[0m`) // 红色显示错误
  },
  
  writeTextSuccessResult(text) {
    terminal?.writeln(`\x1b[32m${text}\x1b[0m`) // 绿色显示成功
  },
  
  writeResult(output) {
    this.writeOutput(output)
  },
  
  focusInput() {
    terminal?.focus()
    return true
  },
  
  isInputFocused() {
    // 简化实现
    return false
  },
  
  setTabCompletion() {
    // 待实现
  },
  
  doSubmitCommand() {
    // 待实现
  },
  
  showNextCommand() {
    // 待实现
  },
  
  listCommandHistory() {
    // 待实现
    return []
  },
  
  toggleAllCollapse() {
    // 待实现
  },
  
  setCommandCollapsible(collapsible) {
    // 待实现
  }
}

onMounted(async () => {
  if (terminalRef.value) {
    // 初始化终端
    terminal = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#252526',
        foreground: '#ffffff'
      }
    })
    
    fitAddon = new FitAddon()
    terminal.loadAddon(fitAddon)
    
    terminal.open(terminalRef.value)
    fitAddon.fit()
    
    // 添加欢迎信息
    terminal.writeln('Welcome to YuTerminal!')
    terminal.writeln('Type "help" for available commands.')
    terminal.write('$ ')
    
    // 监听终端输入
    terminal.onData(data => {
      if (data === '\r') { // 回车
        terminal?.writeln('')
        terminal?.write('$ ')
      } else if (data === '\u007F') { // 退格
        terminal?.write('\b \b')
      } else {
        terminal?.write(data)
      }
    })
  }
})

// 暴露终端实例给父组件
defineExpose({
  terminal: terminalInstance
})
</script>

<style scoped>
.yu-terminal {
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  padding: 10px;
  box-sizing: border-box;
}

.terminal-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>