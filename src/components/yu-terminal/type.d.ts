/**
 ** 定义项目类型
 ** 在我们的项目中，采用分散式的类型定义方式，
 ** 将类型定义文件‍放在各自相关的目录下。
 ** 这种方式让类型定义更加⁢模块化，便于维护和理解。
 */
declare namespace YuTerminal {
  /**
   * 终端输出的不同状态类型，用于标识不同类型的消息
   * - info: 普通信息提示
   * - success: 成功状态信息
   * - warning: 警告信息
   * - error: 错误信息
   * - system: 系统级信息
   */
  type OutputStatusType = "info" | "success" | "warning" | "error" | "system"

  /**
   * 定义终端输出项的类型结构
   * 用于描述终端中每一条输出的格式和内容
   */
  interface OutputType {
    /** 输出项的类型：命令、文本或组件 */
    type: "command" | "text" | "component"
    /** 文本内容，当type为text时使用 */
    text?: string
    /** 结果列表，可用于嵌套输出 */
    resultList?: OutputType[]
    /** 自定义组件，当type为component时使用 */
    component?: any
    /** 输出状态类型，决定消息的显示样式 */
    status?: OutputStatusType
    /** 传递给组件的额外属性 */
    props?: any
    /** 是否可折叠，默认为false */
    collapsible?: boolean
  }

  /**
   * 命令输出类型接口
   * 表示一个命令类型的输出，包含命令文本和结果列表
   */
  interface CommandOutputType extends OutputType {
    /** 输出类型，固定为"command" */
    type: "command"
    /** 命令文本内容 */
    text: string
    /** 命令执行结果列表，包含多个输出项 */
    resultList: OutputType[]
  }

  /**
   * 文本输出类型接口
   * 表示一个纯文本类型的输出，只包含文本内容
   */
  interface TextOutputType extends OutputType {
    /** 输出类型，固定为"text" */
    type: "text"
    /** 文本内容 */
    text: string
  }

  /**
   * 组件输出类型接口
   * 表示一个组件类型的输出，包含要渲染的组件和可选的属性
   */
  interface ComponentOutputType extends OutputType {
    /** 输出类型，固定为"component" */
    type: "component"
    /** 要渲染的组件 */
    component: any
    /** 传递给组件的属性对象（可选） */
    props?: any
  }

  /**
   * 命令输入类型接口
   * 定义命令输入的基本结构，包括文本和可选的占位符
   */
  interface CommandInputType {
    /** 输入的命令文本 */
    text: string
    /** 输入框的占位符文本 */
    placeholder?: string
  }

  /**
   * 终端操作接口
   * 定义了终端实例可用的各种方法，用于控制终端行为和输出
   */
  interface TerminalType {
    /**
     * 清空终端所有输出内容
     */
    clear: () => void

    /**
     * 向终端写入输出内容
     * @param output 要写入的输出内容对象
     */
    writeOutput: (output: OutputType) => void

    /**
     * 向终端写入文本输出
     * @param text 要写入的文本内容
     * @param status 文本输出的状态类型，默认为info
     */
    writeTextOutput: (text: string, status?: OutputStatusType) => void

    /**
     * 向终端写入文本结果
     * @param text 要写入的文本内容
     * @param status 文本结果的状态类型，默认为info
     */
    writeTextResult: (text: string, status?: OutputStatusType) => void

    /**
     * 向终端写入错误类型的文本结果
     * @param text 要写入的错误文本内容
     */
    writeTextErrorResult: (text: string) => void

    /**
     * 向终端写入成功类型的文本结果
     * @param text 要写入的成功文本内容
     */
    writeTextSuccessResult: (text: string) => void

    /**
     * 向终端写入结果内容
     * @param output 要写入的结果对象
     */
    writeResult: (output: OutputType) => void

    /**
     * 聚焦到终端输入框
     * @returns 是否成功聚焦
     */
    focusInput: () => boolean

    /**
     * 检查终端输入框是否处于聚焦状态
     * @returns 输入框是否聚焦
     */
    isInputFocused: () => boolean

    /**
     * 设置Tab键补全功能
     */
    setTabCompletion: () => void

    /**
     * 执行命令提交操作
     */
    doSubmitCommand: () => void

    /**
     * 显示下一条命令（可能是历史命令导航）
     */
    showNextCommand: () => void

    /**
     * 获取命令历史记录列表
     * @returns 命令历史记录数组
     */
    listCommandHistory: () => CommandOutputType[]

    /**
     * 切换所有可折叠内容的展开/收起状态
     */
    toggleAllCollapse: () => void

    /**
     * 设置命令输出是否可折叠
     * @param collapsible 是否可折叠
     */
    setCommandCollapsible: (collapsible: boolean) => void
  }
}
