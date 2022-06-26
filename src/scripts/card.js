

export function layout(elements) {
  const elems = elements;

  function stacks() {
    parent = elems[0].parentNode;
    console.log(parent);
    parent.style.position = "relative";

    let index = 0;

    for (const elem of elems) {
      elem.style.position = "absolute";
      elem.style.zIndex = `-${index}`;
      index++;
    }

    return this;
  }

  function givePerspective(elementsToGlance=3, depth=1) {
    let index = 0;
    let heightOffset = 0;
    let scaleFactor = 1;
    let scaleStep = depth<=0 ? 0 : (depth)/100;
    let heightOffsetStep = 15 * depth;

    for (const elem of elems) {
      elem.style.top = `${heightOffset}px`;
      elem.style.transform = `scale(${scaleFactor})`;

      if (index < elementsToGlance) {
        scaleFactor -= scaleStep;
        heightOffset += heightOffsetStep;
      }

      index++;
    }
    return this;

  }

  return {
    stacks,
    givePerspective,
  }
}


export function animate(elements) {
  const elems = elements;

  function revealElements(staggerDelay=0, verticalOffsetStep=20) {
    const cardHeight = elems[0].offsetHeight;
    let verticalOffset = 0;
    let delay = 0; // millis

    for (const card of elems) {
      card.style.transition = `all ${delay}ms`;
      card.style.transform = `scale(1)`;
      card.style.top = `${verticalOffset}px`;

      delay += staggerDelay;
      verticalOffset = (verticalOffset + cardHeight + verticalOffsetStep);
    }

    return this;
  }

  function concealElements(staggerDelay=0) {
    let staggeringDelay = 0; // millis

    for (const card of elems) {
      card.style.transition = `all ${staggeringDelay}ms`;
      card.style.top = `0px`;

      staggeringDelay += staggerDelay;
    }

    return this;
  }

  return {
    revealElements,
    concealElements,
  }
}//







