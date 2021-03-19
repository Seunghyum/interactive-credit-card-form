import React, { ChangeEvent, useState } from 'react';
import Card from '~components/Card';
import { MemorizedInput } from '~components/Input';
import { MemorizedSelect } from '~components/Select';

import useCardNumber from '~src/hooks/useCardNumber';

import { DEFAULT_CARD_LENGTH, MONTH_SELECT_OPTIONS, YEAR_SELECT_OPTIONS } from '~src/utils/card';

const PaymentPage: React.FC = () => {
  const { cardNumber, displayCardNumber, updateCardNumber, toggleIsMarked } = useCardNumber();
  const [cardHolder, setCardHolder] = useState<string>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [isCardNumberMasked, setIsCardNumberMasked] = useState(true);
  const [cvv, setCvv] = useState<string>('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    updateCardNumber(event.target.value);
  };

  const handleCardHolder = (event: ChangeEvent<HTMLInputElement>) => {
    setCardHolder(event.target.value);
  };

  const handleMonthSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(event.target.value));
  };

  const handleYearSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  const handleCvv = (event: ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleCvvFocus = () => {
    setIsCardFlipped((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log(`
      cardHolder : ${cardHolder}
      month : ${month}
      year : ${year}
      cardNumber : ${cardNumber}
    `);
  };

  return (
    <div className="wrapper">
      <div className="card-form">
        <div className="card-list">
          <Card
            cardNumber={displayCardNumber}
            isCardNumberMasked={isCardNumberMasked}
            mm={month}
            yy={year}
            cvv={cvv}
            isCardFlipped={isCardFlipped}
            cardHolder={cardHolder}
          />
        </div>
        <div className="card-form__inner">
          <MemorizedInput
            maxLength={DEFAULT_CARD_LENGTH}
            value={cardNumber}
            label="Card Number"
            onChange={handleCardNumber}
            autoComplete="off"
          />
          <MemorizedInput value={cardHolder} label="Card Name" onChange={handleCardHolder} autoComplete="off" />
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label className="card-input__label">Expiration Date</label>
                <MemorizedSelect onChange={handleMonthSelect} options={MONTH_SELECT_OPTIONS} />
                <MemorizedSelect onChange={handleYearSelect} options={YEAR_SELECT_OPTIONS} />
              </div>
            </div>
            <div className="card-form__col -cvv">
              <MemorizedInput
                value={cvv}
                label="CVV"
                onFocus={handleCvvFocus}
                onBlur={handleCvvFocus}
                maxLength={4}
                onChange={handleCvv}
                autoComplete="off"
              />
            </div>
          </div>
          <button className="card-form__button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
