export default {
  POST,
}

function POST ({ url, data }) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new global.XMLHttpRequest()
    xmlhttp.open('POST', url, true)
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          resolve(xmlhttp.response)
        } else {
          reject(xmlhttp.response)
        }
      }
    }
    xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xmlhttp.responseType = 'json'
    xmlhttp.send(JSON.stringify(data))
  })
}
