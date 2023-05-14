export function fakeApi<Tresponse>(response: Tresponse): Promise<Tresponse> {
  return new Promise((res) => setTimeout(() => res(response), 450));
}