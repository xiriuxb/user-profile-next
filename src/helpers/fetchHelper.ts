const fakeFetch = (miliseconds: number = 800) => {
  return new Promise<{ ok: boolean }>((resolve, reject) => {
    setTimeout(() => {
      const number = Math.ceil(Math.random() * 10);
      if (number % 5 != 0) {
        resolve({ ok: true });
      } else {
        reject({ ok: false });
      }
    }, miliseconds);
  });
};

export default fakeFetch;
