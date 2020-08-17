async function async1() {
    return 1
}
async function async2() {
    return new Promise((resolve) => {
        setTimeout(resolve(100), 2000)
    })
}
async function async3 () {
    return 2
}

let chain = [async1, async2, async3]
async function doIt () {
    while (chain.length) {
        let data = await chain.pop()()
        console.log('data',data)
    }
} 
doIt()



class carsoul {
    constructor (container, elList, animationType) {
        this.containerEl = container
        this.elList =elList
        this.timer = null
    }

    start () { // 开始执行动画
        this.update(el, nextEl, containerEl)
    }
    stop () { // 结束动画执行
        clearTimeout(this.timer)
        this.timer = null
    }
    update () { // 动画中的更新操作
        this.timer = setTimeout(() => {
            this.update()
        }, 45)
    }
    go (index) {

    }
}

class stratege {
    fadeIn () {

    }
    slideH () {

    }
    slideV () {

    }
}
