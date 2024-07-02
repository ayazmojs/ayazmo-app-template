import { Server } from '@ayazmo/core';

;(async() => {
  async function start() {
    const app = new Server()
    await app.start()
  }

  await start()
})()