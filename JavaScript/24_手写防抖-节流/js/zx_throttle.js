function zxthrottle(fn, interval, leading = true, trailing = true) {

  let startTime = 0;
  let timer = null;

  function _throttle(...args) {

    return new Promise((resolve, reject) => {
      
      try {

        let nowTime = new Date().getTime();

        if (!leading && startTime === 0) startTime = nowTime;

        let waitTime = interval - (nowTime - startTime);

        if (waitTime <= 0) {

          if (timer) clearTimeout(timer);
          const res = fn.apply(this, args);
          resolve(res);
          startTime = nowTime;
          timer = null;

        } else {

          if (!timer && trailing) {
            timer = setTimeout(() => {
              const res = fn.apply(this, args);
              resolve(res);
              startTime = new Date().getTime();
              timer = null;
            }, waitTime);
          }

        }

      } catch (error) {

        reject(error);

      }

    });
    
  }

  _throttle.cancel = function() {
    if (timer) clearTimeout(timer);
    startTime = 0;
    timer = null;
  }

  return _throttle;
}