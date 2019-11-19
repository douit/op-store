import { Message } from 'element-ui'
export const message = function(type='info',message,duration=3000) {
    Message({
        type,
        message,
        duration
    })
}