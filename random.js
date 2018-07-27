const randomBytes = require('randombytes')

function random(size) {
  const r = randomBytes(32 + size)
  return r.slice(32)
}

module.exports = {
  random
}
