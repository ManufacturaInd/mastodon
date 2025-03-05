import { useEffect, forwardRef } from 'react';

import { FormattedMessage } from 'react-intl';

import classNames from 'classnames';

import { fetchAccount } from 'flavours/glitch/actions/accounts';
import { AccountBio } from 'flavours/glitch/components/account_bio';
import { AccountFields } from 'flavours/glitch/components/account_fields';
import { Avatar } from 'flavours/glitch/components/avatar';
import { FollowersCounter } from 'flavours/glitch/components/counters';
import { DisplayName } from 'flavours/glitch/components/display_name';
import { FollowButton } from 'flavours/glitch/components/follow_button';
import { LoadingIndicator } from 'flavours/glitch/components/loading_indicator';
import { Permalink } from 'flavours/glitch/components/permalink';
import { ShortNumber } from 'flavours/glitch/components/short_number';
import { domain } from 'flavours/glitch/initial_state';
import { useAppSelector, useAppDispatch } from 'flavours/glitch/store';

export const HoverCardAccount = forwardRef<
  HTMLDivElement,
  { accountId?: string }
>(({ accountId }, ref) => {
  const dispatch = useAppDispatch();

  const account = useAppSelector((state) =>
    accountId ? state.accounts.get(accountId) : undefined,
  );

  const note = useAppSelector(
    (state) =>
      state.relationships.getIn([accountId, 'note']) as string | undefined,
  );

  useEffect(() => {
    if (accountId && !account) {
      dispatch(fetchAccount(accountId));
    }
  }, [dispatch, accountId, account]);

  return (
    <div
      ref={ref}
      id='hover-card'
      role='tooltip'
      className={classNames('hover-card dropdown-animation', {
        'hover-card--loading': !account,
      })}
    >
      {account ? (
        <>
          <Permalink
            to={`/@${account.acct}`}
            href={account.get('url')}
            className='hover-card__name'
          >
            <Avatar account={account} size={46} />
            <DisplayName account={account} localDomain={domain} />
          </Permalink>

          <div className='hover-card__text-row'>
            <AccountBio
              note={account.note_emojified}
              className='hover-card__bio'
            />
            <AccountFields fields={account.fields} limit={2} />
            {note && note.length > 0 && (
              <dl className='hover-card__note'>
                <dt className='hover-card__note-label'>
                  <FormattedMessage
                    id='account.account_note_header'
                    defaultMessage='Personal note'
                  />
                </dt>
                <dd>{note}</dd>
              </dl>
            )}
          </div>

          <div className='hover-card__number'>
            <ShortNumber
              value={account.followers_count}
              renderer={FollowersCounter}
            />
          </div>

          <FollowButton accountId={accountId} />
        </>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
});

HoverCardAccount.displayName = 'HoverCardAccount';
