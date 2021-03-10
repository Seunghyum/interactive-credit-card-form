import React, { useMemo, useState } from 'react';
import cardDefaultBackgroundImg from '~src/assets/images/card-default-background.jpg';
import VISA_IMG from '~src/assets/images/visa.png';
import CHIP_IMG from '~src/assets/images/chip.png';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

interface iProps {
  cardNumber?: string;
  isCardNumberMasked?: boolean;
  cardHolder?: string;
  mm?: number | undefined;
  yy?: number | undefined;
  cvv?: string;
  isCardFlipped?: boolean;
}

const Card: React.FC<iProps> = ({
  cardNumber = '',
  isCardNumberMasked = true,
  cardHolder,
  mm = 'MM',
  yy = 'YY',
  cvv = '',
  isCardFlipped = false,
}) => {
  const [isBack, setIsBack] = useState(false);
  const [cardType, setCardType] = useState(null);

  const filterMonth = useMemo(() => {
    const str = String(mm);
    return str.length === 1 ? `0${str}` : str;
  }, [mm]);

  const RenderCVV = useMemo(() => [...cvv].map((_, i) => <span key={i}>*</span>), [cvv]);
  const RenderCardNumber = useMemo(
    () =>
      [...cardNumber].map((str, index) => (
        <span key={index}>
          <TransitionGroup className="slide-fade-up">
            <CSSTransition
              timeout={250}
              key={String(cardNumber[index])}
              classNames={{
                enter: 'slide-fade-up-enter',
                enterActive: 'slide-fade-up-enter-active',
                exit: 'slide-fade-up-exit',
                exitActive: 'slide-fade-up-exit-active',
              }}
            >
              <div className={classNames({ 'card-item__numberItem': true, active: str === ' ' })}>
                {cardNumber[index]}
              </div>
            </CSSTransition>
          </TransitionGroup>
          {/* <div className={classNames({ 'card-item__numberItem': true, active: str === ' ' })}>{cardNumber[index]}</div> */}
        </span>
      )),
    [cardNumber],
  );

  return (
    <div className={classNames({ 'card-item': true, active: isCardFlipped })}>
      <div className="card-item__side front">
        <div className="card-item__cover">
          <img src={cardDefaultBackgroundImg} className="card-item__bg" />
        </div>
        <div className="card-item__wrapper">
          <div className="card-item__top">
            <img src={CHIP_IMG} className="card-item__chip" />
            <div className="card-item__type">
              {cardType && <img src={cardDefaultBackgroundImg} alt="card type" className="card-item__typeImg" />}
            </div>
          </div>
          <label className="card-item__number">{RenderCardNumber}</label>
          <div className="card-item__content">
            <label className="card-item__info">
              <div className="card-item__holder">Card Holder</div>
              <div className="card-item__name">{cardHolder || 'Full Name'}</div>
            </label>
            <div className="card-item__date">
              <label className="card-item__dateTitle">Expires</label>
              <label className="card-item__dateItem">
                <span>{filterMonth}</span>
              </label>
              <label className="card-item__divider">/</label>
              <label className="card-item__dateItem">
                <span>{yy}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card-item__side back">
        <div className="card-item__cover">
          {isBack && <img src={cardDefaultBackgroundImg} className="card-item__bg" />}
        </div>
        <div className="card-item__band"></div>
        <div className="card-item__cvv">
          <div className="card-item__cvvTitle">CVV</div>
          <div className="card-item__cvvBand">{RenderCVV}</div>
          <div className="card-item__type">{cardType && <img src={VISA_IMG} className="card-item__typeImg" />}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
