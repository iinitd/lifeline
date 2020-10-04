import React, { useEffect } from 'react';
import IBlock from '../../model/block';

export default function ({ block }: { block: IBlock }) {
  return <div>{block.content}</div>;
}
