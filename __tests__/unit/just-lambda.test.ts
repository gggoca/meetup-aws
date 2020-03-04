import * as func from '../../lambdas/just-lambda';

test('Randome number sum less then 100', async () => {
    expect(await func.HelloYou()).toBeLessThan(100);
});

