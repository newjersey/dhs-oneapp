const StripEmoji = require('./StripEmoji');

describe('StripEmoji middleware', () => {
  it ('return an async resolve method', async () => {
    const resolve = jest.fn('resolve').mockResolvedValue('resolve called');
    const retVal = await StripEmoji(resolve);
    expect(retVal).toEqual('resolve called');
  });

  it('deep removes emoji', async () => {
    const resolve = jest.fn('resolve').mockResolvedValue('resolve called');
    const root = jest.fn('root');
    const context = jest.fn('context');
    const info = jest.fn('info');
    
    const args = {
      arg1: 'Has 😇 emoji',
      args2: {
        also: '🚀',
        has: {
          emoji: '🤓 in here',
          and: 'here 😱',
          oh_yeah: ' for good measure lets trim '
        },
        double_emoji_too: ' 🍕🌮 '
      }
    };

    await StripEmoji(resolve, root, args, context, info);

    expect(resolve).toHaveBeenCalledWith(root, {
      arg1: 'Has emoji',
      args2: {
        also: '',
        has: {
          emoji: 'in here',
          and: 'here',
          oh_yeah: 'for good measure lets trim'
        },
        double_emoji_too: ''
      }
    }, context, info);
  });
});
