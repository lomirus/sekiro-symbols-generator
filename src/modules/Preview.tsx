import { useContext, useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import Context from '../store/context';

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const MAX_HEIGHT = 640, MAX_WIDTH = 900, RATIO = MAX_WIDTH / MAX_HEIGHT

const Preview = (): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)
    const [store, dispatchStore] = useContext(Context)
    let ctx: CanvasRenderingContext2D;

    useEffect(() => {
        console.log('asd')
        if (!canvas.current) return;
        const ratio = store.options.width / store.options.height;
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
            if (store.options.background) {
                image.src = store.options.background as string;
                image.onload = () => {
                    ctx.drawImage(image, 0, 0, store.options.width, store.options.height)
                    resolve(null)
                }
            } else {
                ctx.clearRect(0, 0, store.options.width, store.options.height)
                resolve(null)
            }
        }).then(() => {
            drawMask(store.options.opacity)
            drawText(store.options.symbol, store.options.annotation, store.options.color)
            dispatchStore({
                type: "URL",
                payload: canvas.current?.toDataURL()
            })
        })
    }, [JSON.stringify(store.options)])

    function drawMask(opacityDec: number) {
        const opacity = opacityDec < 16 ?
            '0' + opacityDec.toString(16) :
            opacityDec.toString(16)
        ctx.fillStyle = `#000000${opacity}`;
        ctx.fillRect(0, 0, store.options.width, store.options.height)
    }

    function drawText(symbol: string, annotation: string, color: string) {
        const ratio = store.options.height / 1080
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
            ctx.fillText(char, store.options.width / 2, symbol_top)
            symbol_top += symbol_size + symbols_gap
        })

        ctx.font = `${36 / 1080 * store.options.height}px serif`
        ctx.fillText(stretch(annotation), store.options.width / 2, text_top)
    }

    return (
        <canvas id="preview" ref={canvas}
            width={store.options.width} height={store.options.height} css={{
                ...canvasStyle
            }}>
        </canvas>
    )
}

const stretch = (oldText: string): string => oldText.split('').join(' ')





export default Preview