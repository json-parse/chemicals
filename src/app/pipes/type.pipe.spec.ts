import { TypePipe } from './type.pipe';

describe('TypePipe', () => {

  it('should return A when inout=0', () => {
    const pipe = new TypePipe();
    expect(pipe.transform(0)).toEqual('A');
  });

  it('should return B when inout=1', () => {
    const pipe = new TypePipe();
    expect(pipe.transform(1)).toEqual('B');
  });

  it('should return C when inout=2', () => {
    const pipe = new TypePipe();
    expect(pipe.transform(2)).toEqual('C');
  });

});
