import { useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import { textType } from '../global/types'

type PreviewProps = {
    text: textType
}

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const HEIGHT = 640, WIDTH = 540

const Preview = ({ text }: PreviewProps): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;
        drawBackground(ctx, '#000000')
        drawText(ctx, text.symbol, stretch(text.title), text.color)
    })

    useEffect(() => {
        const ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;
        drawText(ctx, ' ', ' ', text.color)
    }, [])

    const stretch = (oldText: string): string => oldText.split('').join(' ')

    return (
        <canvas id="preview" ref={canvas}
            width={WIDTH} height={HEIGHT} css={canvasStyle}>
        </canvas>
    )
}

function drawBackground(ctx: CanvasRenderingContext2D, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

function drawText(ctx: CanvasRenderingContext2D, symbol: string, title: string, color: string) {
    ctx.fillStyle = color;
    const fontSize = 96
    const top = HEIGHT / 2 + symbol.length * fontSize / 2
    drawSymbol(ctx, symbol, fontSize)
    drawTitle(ctx, title, top)
}

function drawSymbol(ctx: CanvasRenderingContext2D, text: string, fontSize: number) {
    const fontFamily = ['symbol', '宋体']
    ctx.font = `${fontSize}px ${fontFamily.map(name => `"${name}"`).join(',')}`
    ctx.textAlign = 'center'
    let y = HEIGHT / 2 - text.length * fontSize / 2
    text.split('').forEach(symbol => {
        ctx.fillText(symbol, WIDTH / 2, y)
        y += fontSize
    })
}

function drawTitle(ctx: CanvasRenderingContext2D, title: string, top: number) {
    const fontSize = 28
    ctx.font = `${fontSize}px serif`
    ctx.textAlign = 'center'
    ctx.fillText(title, WIDTH / 2, top)
}


export default Preview