exports.checkForEth = (tweet) => {
    const regex = /(\$\w+)/g;
    const tagIndices = [];
    let match;
    while ((match = regex.exec(tweet)) !== null) {
        let start = match.index, end = regex.lastIndex + 1;
        tagIndices.push({start, end, user: false});
    }
    return tagIndices;
}

exports.checkForAt = (tweet) => {
    const regex = /(@\w+)/g;
    const tagIndices = [];
    let match;
    while ((match = regex.exec(tweet)) !== null) {
        let start = match.index, end = regex.lastIndex + 1;
        tagIndices.push({start, end, user: true});
    }
    return tagIndices;
}

exports.isTweeth = (tweet) => {
  const sections = tweet.split(' ');
  if (sections.length !== 3) return false;
  const [eth, user, amount] = sections;

  if (eth !== '$ETH' && eth !== '$eth') return false;
  if (user[0] !== '@') return false;
  if (!amount.length || parseFloat(amount) <= 0 || isNaN(amount)) return false;
  return true;
}


exports.processMatches = (matches, tweetDiv, text) => {
    while (tweetDiv.firstChild) tweetDiv.removeChild(tweetDiv.firstChild);
      for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const nextMatch = matches[i + 1];
        const tag = text.slice(match.start, match.end);
        if (i === 0) {
          const preContent = text.slice(0, match.start);
          if (preContent.length) {
            const pre = document.createElement('span');
            pre.textContent = preContent;
            tweetDiv.appendChild(pre);
          }
        }
        const tagEl = document.createElement('span');
        tagEl.textContent = tag
        tagEl.className = match.user ? 'tagged-text user-tag' : 'tagged-text'
        // if (tagEl.className === 'tagged-text user-tag') {
        //   const link = document.createElement('a');
        //   link.appendChild(tagEl);
        //   link.className = 'tag-link';
        //   link.href = '/' + tag.split('@')[1];
        //   tweetDiv.appendChild(link);
        // } else 
        tweetDiv.appendChild(tagEl);
        let after = '';
        if (nextMatch) after = text.slice(match.end, nextMatch.start);
        else after = text.slice(match.end);
        if (after.length) {
          const afterEl = document.createElement('span');
          afterEl.textContent = after;
          tweetDiv.appendChild(afterEl);
        }
      }
      const range = document.createRange();
      range.selectNodeContents(tweetDiv.lastChild);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
}