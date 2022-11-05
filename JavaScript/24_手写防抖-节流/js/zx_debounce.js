const INITIAL_VALUE_NULL = null;

function zxdebounce(fn, delay, immediate = false, callbackFn) {

  let timer = INITIAL_VALUE_NULL;
  let isInvoke = false;

  function _debounce(...args) {

    return new Promise((resolve, reject) => {
      try {
        if (timer) clearTimeout(timer);
        let res = undefined;

        // 第一次立即执行immediate为true 以及从没有被调用过
        // 第二次以及之后跳过
        if (immediate && !isInvoke) {
          res = fn.apply(this, args);
          resolve(res);
          if (callbackFn) callbackFn(res);
          isInvoke = true;
        }
        
        // 延迟执行
        timer = setTimeout(() => {
          
          res = fn.apply(this, args);
          resolve(res);
          if (callbackFn) callbackFn(res);
          timer = INITIAL_VALUE_NULL;
          isInvoke = false;

        }, delay);
      } catch (error) {
        reject(error);
      }
    })

  }

  // 取消功能
  _debounce.cancel = () => {

    if (timer) clearTimeout(timer);
    timer = INITIAL_VALUE_NULL;
    isInvoke = false;

  }

  return _debounce;
}