import { Server } from '@ayazmo/core';
import pino from 'pino'

const logger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
  },
})

;(async() => {
  async function start() {
    const app = new Server({
      logger,
    })
    await app.start()
  }

  await start()
})()