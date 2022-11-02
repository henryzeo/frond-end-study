class Cache {

  constructor(isLoacl = true) {
    this.storage = isLoacl ? localStorage : sessionStorage
  }

  setCache(key, value) {
    if (!value) {
      throw new Error("value error: value 必须有值！")
    }

    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key) {
    const result = this.storage.getItem(key)

    if (result) {
      return JSON.parse(result)
    }
  }

  removeCache(key) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }

}

const localCache = new Cache()
const sessionCache = new Cache(false)