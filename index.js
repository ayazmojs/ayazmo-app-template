import { Server } from '@ayazmo/core';

;(async() => {
  async function start() {
    const app = new Server()
    await app.start(3000)
  }

  await start()
})()