const trendings = () => {
    return new Promise( (resolve,reject) => {
        wx.request({
            url : 'https://github-trending-api.now.sh/repositories',
            success:(res) =>{
                
                resolve(res.data);
            },
            fail: (error) => {
                reject(error);
            }
        })
    })
}
module.exports = {
  trendings,
}