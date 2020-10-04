const PATH = '/api/';

const fakeBlocks: any[] = [
  { id: '1', content: 'hi' },
  { id: '2', content: 'hi2' },
];

async function getList(): Promise<any[]> {
  return fakeBlocks;
}

export default {
  getList,
};
