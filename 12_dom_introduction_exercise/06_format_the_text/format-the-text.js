function solve() {
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
  let result = []
  
  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphSentences = sentences.slice(i, i + 3).map(sentence => sentence.trim() + '.').join(' ');
    let paragraph = `<p>${paragraphSentences}</p>`;
    result.push(paragraph);
  }
  
  document.getElementById('output').innerHTML = result.join('\n');
}