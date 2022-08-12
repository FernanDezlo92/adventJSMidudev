export default function listGifts(letter) {
    const words = letter.trim().split(" ")
    let regalos = {}
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (!word.includes("_")) {
        if (!regalos[word]) {
          regalos[word] = 1
          } else {
            regalos[word] ++
          }  
        }
      }
      return regalos;
    }
