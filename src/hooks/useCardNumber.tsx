import React, { useEffect, useState } from 'react';

import { DEAFULT_CARD_PLACEHOLDER } from '~src/utils/card';

interface iReturn {
  cardNumber: string;
  displayCardNumber: string;
  updateCardNumber: (cardNumber: string) => void;
  toggleIsMarked: () => void;
}

const isNumeric = (str: string) => /^[\s\d]+$/.test(str);

const useCardNumber = (cardNum = ''): iReturn => {
  const [cardNumber, setCardNumber] = useState(cardNum);
  const [displayCardNumber, setDisplayCardNumber] = useState(cardNum);
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    const newDisplay = cardNumber + DEAFULT_CARD_PLACEHOLDER.substring(cardNumber.length);
    setDisplayCardNumber(newDisplay);
    if (isMarked) updateMark();
  }, [cardNumber]);

  const updateMark = () => {
    const markedArr = DEAFULT_CARD_PLACEHOLDER.split(' ');
    const newDisplay = cardNumber
      .split(' ')
      .map((nums, i) => {
        if (i === 0) return nums;
        return markedArr[i];
      })
      .join(' ');

    setDisplayCardNumber(newDisplay);
  };

  const updateCardNumber = (cardNumber: string) => {
    if (cardNumber.length === 0) setCardNumber('');
    if (isNumeric(cardNumber)) {
      const newCardNumber = cardNumber
        .replace(/\D/g, '')
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
        .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');

      setCardNumber((prev) => {
        // ' ' 빈 문자열 삭제 시
        if (prev.length > cardNumber.length && prev[prev.length - 1] === ' ') return prev.substring(0, prev.length - 2);
        else return newCardNumber;
      });
    }
  };

  const toggleIsMarked = () => {
    setIsMarked((prev) => !prev);
  };

  return { cardNumber, displayCardNumber, updateCardNumber, toggleIsMarked };
};

export default useCardNumber;
