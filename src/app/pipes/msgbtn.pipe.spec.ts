import { MsgbtnPipe } from './msgbtn.pipe';

describe('MsgbtnPipe', () => {
  it('should return Add when there is no msg', () => {
    const pipe = new MsgbtnPipe();
    expect(pipe.transform('')).toEqual('Add');
  });

  it('should return Edit when there is a msg', () => {
    const pipe = new MsgbtnPipe();
    expect(pipe.transform('Smth')).toEqual('Edit');
  });
});
