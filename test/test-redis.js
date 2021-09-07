const Redis = require('ioredis'); 

const redis = new Redis(); // 这里使用redis默认配置

async function test() {
  await redis.set("b", 666)
  const keys = await redis.keys('*');
  console.log('获取到的key：', keys);
}

test();
