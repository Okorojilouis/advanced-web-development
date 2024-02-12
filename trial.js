const resultList=document.querySelector('.results')
new URLSearchParams(window.location.search).forEach((name,
     number) => {
    resultList.append(`${name}:${number}`)
    resultList.append(document.createElement('br'))
})