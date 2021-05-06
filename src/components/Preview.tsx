import { useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import { optionsType } from '../global/types'

type PreviewProps = {
    options: optionsType
}

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const HEIGHT = 640, WIDTH = 720

const Preview = ({ options }: PreviewProps): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)
    let ctx: CanvasRenderingContext2D;

    useEffect(() => {
        ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;

        const image = new Image();
        if (options.background) {
            image.src = options.background as string;
            image.onload = () => {
                ctx.drawImage(image, 0, 0)
                drawText(options.symbol, stretch(options.title), options.color)
            }
        } else {
            drawBackground("#000000")
            drawText(options.symbol, stretch(options.title), options.color)
        }
    })

    function drawBackground(color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
    }

    function drawText(symbol: string, title: string, color: string) {
        ctx.fillStyle = color;
        const fontSize = symbol.length === 1 ? 180 : 100
        const top = HEIGHT / 2 + symbol.length * fontSize / 2 - 24
        drawSymbol(symbol, fontSize)
        drawTitle(title, top)
    }

    function drawSymbol(text: string, fontSize: number) {
        const fontFamily = ['symbol', '宋体']
        ctx.font = `${fontSize}px ${fontFamily.map(name => `"${name}"`).join(',')}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        let y = HEIGHT / 2 - text.length * fontSize / 2 - 48
        text.split('').forEach(symbol => {
            ctx.fillText(symbol, WIDTH / 2, y)
            y += fontSize
        })
    }

    function drawTitle(title: string, top: number) {
        const fontSize = 28
        ctx.font = `${fontSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(title, WIDTH / 2, top)
    }

    return (
        <canvas id="preview" ref={canvas}
            width={WIDTH} height={HEIGHT} css={canvasStyle}>
        </canvas>
    )
}

const stretch = (oldText: string): string => oldText.split('').join(' ')





export default Preview