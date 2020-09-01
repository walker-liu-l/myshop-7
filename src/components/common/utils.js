
//导出封装防抖功能，在需要的地方导入就行了
export function debounce(fun, delay) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(...args)
        }, delay
        )
    }
}