# async和promise的区别

async和promise其实是两个东西.

可以浅谈一下async和promise

### promise
- promise有三种状态pending(进行中)，fulfilled(已成功，即resolved), rejected(已失败,即rejected)
- 原型方法Promise.prototype.then(res,err) 第一个参数是resolved回调的参数，第二个是rejected状态下回调的参数
- 原型方法Promise.prototype.catch(err) 参数是rejected状态下回调的参数，相当于Promise.prototype.then(null,err => {})
- 原型方法Promise.prototype.finally()
- Promise.all(arr) 当arr的promise都为resolved状态时才会进入then回调，回调参数是一个数组，包含所有resolved的值，
  如果其中有rejected状态，就会进入catch回调，参数err是第一个rejected