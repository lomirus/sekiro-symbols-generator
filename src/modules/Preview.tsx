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
            drawText(store.options.symbol, store.options.title, store.options.color)
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

    function drawText(symbol: string, title: string, color: string) {
        ctx.fillStyle = color;
        const fontSize = symbol.length === 1 ? 180 : 100
        const top = store.options.height / 2 + symbol.length * fontSize / 2 - 24
        drawSymbol(symbol, fontSize)
        drawTitle(stretch(title), top)
    }

    function drawSymbol(text: string, fontSize: number) {
        const fontFamily = ['symbol', '宋体']
        ctx.font = `${fontSize}px ${fontFamily.map(name => `"${name}"`).join(',')}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        let y = store.options.height / 2 - text.length * fontSize / 2 - 48
        text.split('').forEach(symbol => {
            ctx.fillText(symbol, store.options.width / 2, y)
            y += fontSize
        })
    }

    function drawTitle(title: string, top: number) {
        const fontSize = 28
        ctx.font = `${fontSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(title, store.options.width / 2, top)
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