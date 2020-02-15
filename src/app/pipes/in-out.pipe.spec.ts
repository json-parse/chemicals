import { InOutPipe } from './in-out.pipe';

describe('InOutPipe', () => {
  it('should return arrival when inout=0', () => {
    const pipe = new InOutPipe();
    let result = pipe.transform(0, true);
    expect(result).toEqual('Arrival');
  });

  it('should return dispatch when inout=1', () => {
    const pipe = new InOutPipe();
    let result = pipe.transform(1, true);
    expect(result).toEqual('Despatch');
  });

  it('should return to when inout=0', () => {
    const pipe = new InOutPipe();
    let result = pipe.transform(0, false);
    expect(result).toEqual('To');
  });

  it('should return from when inout=1', () => {
    const pipe = new InOutPipe();
    let result = pipe.transform(1, false);
    expect(result).toEqual('From');
  });

});
