import { useContext, useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import Context from '../store/context';

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const MAX_HEIGHT = 640, MAX_WIDTH = 900, RATIO = MAX_WIDTH / MAX_HEIGHT

const stretch = (oldText: string): string => oldText.split('').join(' ')
let getUrl: () => string;

const Preview = (): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)
    const store = useContext(Context)[0]
    let ctx: CanvasRenderingContext2D;

    useEffect(() => {
        console.log('asd')
        if (!canvas.current) return;
        const ratio = store.width / store.height;
        if (ratio > RATIO) {
            canvas.current.style.width = `${MAX_WIDTH}px`
            canvas.current.style.height = `${MAX_WIDTH / ratio}px`
        } else {
            canvas.current.style.width = `${MAX_HEIGHT * ratio}px`
            canvas.current.style.height = `${MAX_HEIGHT}px`
        }
        ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;

        const image = new Image();
        new Promise(resolve => {
            if (store.background) {
                image.src = store.background as string;
                image.onload = () => {
                    ctx.drawImage(image, 0, 0, store.width, store.height)
                    resolve(null)
                }
            } else {
                ctx.clearRect(0, 0, store.width, store.height)
                resolve(null)
            }
        }).then(() => {
            drawMask(store.opacity)
            drawText(store.symbol, store.annotation, store.color)
        })
    }, [JSON.stringify(store)])

    getUrl = (): string => canvas.current?.toDataURL() as string

    function drawMask(opacityDec: number) {
        const opacity = opacityDec < 16 ?
            '0' + opacityDec.toString(16) :
            opacityDec.toString(16)
        ctx.fillStyle = `#000000${opacity}`;
        ctx.fillRect(0, 0, store.width, store.height)
    }

    function drawText(symbol: string, annotation: string, color: string) {
        const ratio = store.height / 1080
        const symbols_top = (() => {
            switch (symbol.length) {
                case 1: return 320;
                case 2: return 250;
                default: return 144
            }
        })() * ratio

        const symbol_size = (() => {
            switch (symbol.length) {
                case 1: return 360;
                case 2: return 160;
                default: return 120;
            }
        })() * ratio

        const symbols_gap = (() => {
            switch (symbol.length) {
                default: return 20
            }
        })() * ratio

        const text_top = symbols_top +
            symbol_size * symbol.length +
            symbols_gap * (symbol.length - 1) +  40 * ratio

        ctx.fillStyle = color;
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'

        const fontFamily = ['symbol', '宋体']
        ctx.font = `${symbol_size}px ${fontFamily.map(name => `"${name}"`).join(',')}`
        let symbol_top = symbols_top
        symbol.split('').forEach(char => {
            ctx.fillText(char, store.width / 2, symbol_top)
            symbol_top += symbol_size + symbols_gap
        })

        ctx.font = `${36 / 1080 * store.height}px serif`
        ctx.fillText(stretch(annotation), store.width / 2, text_top)
    }

    return (
        <canvas id="preview" ref={canvas}
            width={store.width} height={store.height} css={{
                ...canvasStyle
            }}>
        </canvas>
    )
}


export { Preview, getUrl }