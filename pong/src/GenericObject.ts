interface GenericObjects {
    object: any
    width: number
    height: number
    context?: any

    getWidth(): void 
    getHeight(): void 
}

export const objectCanvas = document.getElementById('canvas') as HTMLCanvasElement
export const context = objectCanvas.getContext('2d') 

export class Canvas implements GenericObjects {
    constructor(public object: any, public width: number, public height: number, public context: any = 0) {}
    public getWidth() {
        return this.width 
    }
    public getHeight() {
        return this.height
    }
}

