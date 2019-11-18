import zh from './zh.js'
import en from './en.js'

const install = (Vue) => {
    Object.defineProperty(Vue.prototype,'$zh',{
        get() {
            return zh // 可以是一个对象或方法
        }
    })
    Object.defineProperty(Vue.prototype,'$en',{
        get() {
            return en // 可以是一个对象或方法
        }
    })
}

export default install
