import { useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import { optionsType } from '../store/types'

type PreviewProps = {
    options: optionsType
}

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const MAX_HEIGHT = 640, MAX_WIDTH = 900, RATIO = MAX_WIDTH / MAX_HEIGHT

const Preview = ({ options }: PreviewProps): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)
    let ctx: CanvasRenderingContext2D;

    useEffect(() => {
        console.log(`WIDTH: ${options.width}, HEIGHT: ${options.height}`)
        if (!canvas.current) return;
        const ratio = options.width / options.height;
        if (ratio > RATIO) {
            canvas.current.style.width = `${MAX_WIDTH}px`
            canvas.current.style.height = `${MAX_WIDTH / ratio}px`
        } else {
            canvas.current.style.width = `${MAX_HEIGHT * ratio}px`
            canvas.current.style.height = `${MAX_HEIGHT}px`
        }
        ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;

        const image = new Image();
        if (options.background) {
            image.src = options.background as string;
            image.onload = () => {
                ctx.drawImage(image, 0, 0, options.width, options.height)
                const opacity = options.opacity < 16 ?
                    '0' + options.opacity.toString(16) :
                    options.opacity.toString(16)
                drawBackground(`#000000${opacity}`)
                drawText(options.symbol, stretch(options.title), options.color)
            }
        } else {
            drawBackground("#000000")
            drawText(options.symbol, stretch(options.title), options.color)
        }
    })

    function drawBackground(color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, options.width, options.height)
    }

    function drawText(symbol: string, title: string, color: string) {
        ctx.fillStyle = color;
        const fontSize = symbol.length === 1 ? 180 : 100
        const top = options.height / 2 + symbol.length * fontSize / 2 - 24
        drawSymbol(symbol, fontSize)
        drawTitle(title, top)
    }

    function drawSymbol(text: string, fontSize: number) {
        const fontFamily = ['symbol', '宋体']
        ctx.font = `${fontSize}px ${fontFamily.map(name => `"${name}"`).join(',')}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        let y = options.height / 2 - text.length * fontSize / 2 - 48
        text.split('').forEach(symbol => {
            ctx.fillText(symbol, options.width / 2, y)
            y += fontSize
        })
    }

    function drawTitle(title: string, top: number) {
        const fontSize = 28
        ctx.font = `${fontSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(title, options.width / 2, top)
    }

    return (
        <canvas id="preview" ref={canvas}
            width={options.width} height={options.height} css={{
                ...canvasStyle
            }}>
        </canvas>
    )
}

const stretch = (oldText: string): string => oldText.split('').join(' ')





export default Preview