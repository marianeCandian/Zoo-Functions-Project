const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificando se a função retorna undefined quando não tem parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se ao entrar com um parâmetro que não seja string, retorne erro', () => {
    expect(handlerElephants(6)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se ao receber count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Verifica se ao receber names retorna o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('verfica se ao receber averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('verfica se ao receber location retorna a localização do elefante dentro do zoo', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('verfica se ao receber populatiry retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('populatiry')).toBeNull();
  });

});
