import * as func from '../../lambdas/with-input-lambda';

test('adds 1 + 2 to equal 3', () => {
    expect(func.HelloYou({a:1,b:2})).toBe(3);
});

