import { FC } from 'react';
import { BetMessageProps } from './BetMessage.props';
import { useAppDispatch } from '@/app/hooks';
import { clearCurrent } from '@/app/betSlice';
import { CloseButton, MessageText, MessageWrapper } from './BetMessage.styles';

const BetMessage: FC<BetMessageProps> = ({ bet }) => {
  const { event } = bet;
  const dispatch = useAppDispatch();
  const result = bet.option === 'draw' ? 'draw' : `${bet.option} team win`;
  return (
    <MessageWrapper>
      <MessageText>
        Thank you, your bet [MATCH {event?.homeTeam?.name} vs{' '}
        {event?.awayTeam?.name}, RESULT - {result} BET AMOUNT = {bet.value}{' '}
        POINTS] successfully accepted.
      </MessageText>
      <CloseButton type='button' onClick={() => dispatch(clearCurrent())} />
    </MessageWrapper>
  );
};

export default BetMessage;
