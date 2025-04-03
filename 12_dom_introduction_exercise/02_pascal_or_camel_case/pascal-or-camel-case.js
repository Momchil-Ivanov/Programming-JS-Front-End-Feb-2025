function solve() {
  const textInput = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  
  const words = textInput.toLowerCase().split(' ');
  let result = '';

  if (namingConvention === 'Camel Case') {
    result = words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  } else if (namingConvention === 'Pascal Case') {
    for (let word of words) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}