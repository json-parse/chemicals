import { WarehousePipe } from './warehouse.pipe';

describe('WarehousePipe', () => {

  it('should filter wh1', () => {
    const pipe = new WarehousePipe();
    let result = pipe.transform(
    [
      {
        _id: '1',
        date: null,
        inOut: 1,
        type: 0,
        quantity: 34,
        warehouse: 1
      },
      {
        _id: '2',
        date: null,
        inOut: 1,
        type: 1,
        quantity: 90,
        warehouse: 2
      }
    ], 1);

    expect(result).toEqual([
      {
      _id: '1',
      date: null,
      inOut: 1,
      type: 0,
      quantity: 34,
      warehouse: 1
    }
  ]);
  });

  it('should filter wh2', () => {
    const pipe = new WarehousePipe();
    let result = pipe.transform(
      [
        {
          _id: '1',
          date: null,
          inOut: 1,
          type: 0,
          quantity: 34,
          warehouse: 1
        },
        {
          _id: '2',
          date: null,
          inOut: 1,
          type: 1,
          quantity: 90,
          warehouse: 2
        }
      ], 2);

    expect(result).toEqual([
      {
        _id: '2',
        date: null,
        inOut: 1,
        type: 1,
        quantity: 90,
        warehouse: 2
      }
    ]);
  });

  it('should return empty array', () => {
    const pipe = new WarehousePipe();
    let result = pipe.transform([
      {
      _id: '2',
        date: null,
        inOut: 1,
        type: 1,
        quantity: 90,
        warehouse: 2
      }
    ], 1);
    expect(result).toEqual([]);
  });

});
