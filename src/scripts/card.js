export function initCards(cards) {
  let counter = 0;
  let heightOffset = 0;
  let scaleFactor = 1;
  let staggeringOffset = 200;

  for (const card of cards) {
    card.style.zIndex = `-${counter}`;
    card.style.top = `${heightOffset}px`;
    card.style.transform = `scale(${scaleFactor})`;
    card.style.transition = `all ${staggeringOffset}ms`;

    if (counter < 3) {
      scaleFactor-=0.02;
      heightOffset += 15;
      staggeringOffset += 150;
    }

    counter++;
  }
}

export function showAllCards(cards) {
  const cardHeight = cards[0].offsetHeight;
  const verticalOffsetStep = 20;
  let verticalOffset = 0;

  for (const card of cards) {
    card.style.transform = `scale(1)`;
    _moveCardBy(card, verticalOffset);
    verticalOffset = (verticalOffset + cardHeight + verticalOffsetStep);
  }
}

export function hideCards(cards) {
  for (const card of cards) {
    card.style.top = `0px`;
  }

  initCards(cards);
}

function _moveCardBy(card, verticalOffset) {
  card.style.top = `${verticalOffset}px`;
}