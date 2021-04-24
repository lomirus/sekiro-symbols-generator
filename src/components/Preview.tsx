import { useRef, useEffect, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
}

const HEIGHT = 540, WIDTH = 480

const Preview = (): ReactElement => {
    const canvas = useRef<HTMLCanvasElement>(null)
    let ctx: CanvasRenderingContext2D

    useEffect(() => {
        ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;
        drawBackground(ctx, '#000000')
        drawText(ctx, '忍殺', 'SHINOBI EXECUTION')
    }, [])

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

function drawText(ctx: CanvasRenderingContext2D, symbol: string, title: string, color = '#FFFFFF') {
    ctx.fillStyle = color;
    const fontSize = 96
    const top = HEIGHT / 2 + symbol.length * fontSize / 2
    drawSymbol(ctx, symbol, fontSize)
    drawTitle(ctx, title, top)
}

function drawSymbol(ctx: CanvasRenderingContext2D, text: string, fontSize: number) {
    const fontFamily = ['"EPSON 太行書体Ｂ"', '宋体']
    ctx.font = `${fontSize}px ${fontFamily.join(',')}`
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