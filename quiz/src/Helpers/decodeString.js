const decodeString=(str)=> {
    const textArea =document.createElement('textarea')
    textArea.innerHTML=str
    return textArea.value
}

export default decodeString;

