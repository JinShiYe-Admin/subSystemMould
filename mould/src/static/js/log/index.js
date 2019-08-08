/**
 * 通用控制台打印
 */
class Log {
  constructor() {
    this.fontColor = '#34495e'
    this.infoColor = '#3498db'
    this.successColor = '#2ecc71'
    this.errorColor = '#e74c3c'
    this.warnColor = '#f1c40f'
  }


  info(label = 'info', message) {
    console.log(
      `%c ${label} %c ${message}`,
      `color: #fff; background-color: ${this.infoColor}; border-radius: 2px`,
      `color: ${this.fontColor}`
    )
  }

  success(label = 'success', message) {
    console.log(
      `%c ${label} %c ${message}`,
      `color: #fff; background-color: ${this.successColor}; border-radius: 2px`,
      `color: ${this.fontColor}`
    )
  }

  error(label = 'error', message) {
    console.error(
      `%c ${label} %c ${message}`,
      `color: #fff; background-color: ${this.errorColor}; border-radius: 2px`,
      `color: ${this.fontColor}`
    )
  }

  warn(label = 'warn', message) {
    console.warn(
      `%c ${label} %c ${message}`,
      `color: #fff; background-color: ${this.warnColor}; border-radius: 2px`,
      `color: ${this.fontColor}`
    )
  }
}

export default (new Log())
